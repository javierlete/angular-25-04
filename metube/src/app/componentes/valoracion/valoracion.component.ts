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
  @Output() valoracionChange = new EventEmitter<number>();

  onCambio(valoracionEnElCuadro: number) {
    this.valoracionChange.emit(valoracionEnElCuadro);
  }
}
