import { Component, Input } from "@angular/core";

@Component({
    selector: 'alerta',
    template: '<div style="background-color: {{color}}">{{mensaje}}</div>',
    styles: `div { 
        text-align: center; 
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: black;
        border: 1px solid lightgray;
        border-radius: 0.25rem;
        padding: 0.25rem;
        color: white;
        font-weight: bold;
        font-family: sans-serif;
        font-size: 150%;
    }`,
    standalone: true,
})
export class AlertaComponent {
    @Input() mensaje = 'Alerta de prueba';
    @Input() color = 'red';
}
