import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-label-input',
  standalone: true,
  imports: [],
  template: `
    <div>
        <label for="{{id}}">{{etiqueta}}</label>
        <input type="{{tipo}}" id="{{id}}">
    </div>
  `,
  styles: `
    div {
      display: flex;
      align-items: baseline;
    }

    label {
      width: 10rem;
    }

    input {
      flex-grow: 1;
      margin: 0.5rem 0;

      padding: 0.5rem;
      border: 1px solid darkgray;
      border-radius: 0.5rem;
    }
  `
})
export class LabelInputComponent {
  @Input() etiqueta: string = '';
  @Input() id: string = '';
  @Input() tipo: string = 'text';
}
