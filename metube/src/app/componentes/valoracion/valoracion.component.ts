import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-valoracion',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './valoracion.component.html',
  styleUrl: './valoracion.component.css'
})
export class ValoracionComponent {
  @Input() tipo: 'cuadro' | 'estrellas' = 'estrellas';
  @Input() valoracion?: number;
  @Input() minimo = 0;
  @Input() maximo = 10;
  @Output() valoracionChange = new EventEmitter<number>();

  obtenerArrayEstrellas() {
    return Array(this.valoracion);
  }
  
  obtenerArrayEstrellasHuecas() {
    return Array(this.maximo - Number(this.valoracion));
  }

  onCambio(valoracionEnElCuadro: number) {
    if(valoracionEnElCuadro >= this.minimo && valoracionEnElCuadro <= this.maximo) {
      this.valoracionChange.emit(valoracionEnElCuadro);
      this.valoracion = valoracionEnElCuadro;
    }
  }
}
