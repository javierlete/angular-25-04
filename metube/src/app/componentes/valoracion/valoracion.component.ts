import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-valoracion',
  standalone: true,
  imports: [],
  templateUrl: './valoracion.component.html',
  styleUrl: './valoracion.component.css'
})
export class ValoracionComponent {
  @Input() valoracion?: number;
  @Input() minimo = 0;
  @Input() maximo = 10;
  @Output() valoracionChange = new EventEmitter<number>();

  onCambio(valoracionEnElCuadro: number) {
    if(valoracionEnElCuadro >= this.minimo && valoracionEnElCuadro <= this.maximo) {
      this.valoracionChange.emit(valoracionEnElCuadro);
      this.valoracion = valoracionEnElCuadro;
    }
  }
}
