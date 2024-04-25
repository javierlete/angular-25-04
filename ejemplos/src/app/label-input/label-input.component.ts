import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-label-input',
  standalone: true,
  imports: [],
  template: `
    <div>
        <label for="{{id}}">{{etiqueta}}</label>
        <input type="{{tipo}}" id="{{id}}" (input)="onValorCambiado(cuadro.value)" #cuadro>
    </div>
  `,
  styleUrl: './label-input.component.css'
})
export class LabelInputComponent {
  @Input() etiqueta: string = '';
  @Input() id: string = '';
  @Input() tipo: string = 'text';

  @Output() valorCambiado = new EventEmitter<string>();

  onValorCambiado(texto: string) {
    this.valorCambiado.emit(texto);
  }
}
