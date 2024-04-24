import { Component, Input } from "@angular/core";

@Component({
    selector: 'alerta',
    template: '<div>{{mensaje}}</div>',
    styles: `div { 
        text-align: center; 
        background-color: red;
        border: 1px solid lightgray;
        border-radius: 0.25rem;
        padding: 0.25rem;
        color: white;
        font-weight: bold;
        font-family: sans-serif;
    }`,
    standalone: true,
})
export class AlertaComponent {
    @Input() mensaje = 'Alerta de prueba';
}
