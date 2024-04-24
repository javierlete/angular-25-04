import { Component } from "@angular/core";

@Component({
    standalone: true,
    selector: 'app-cabecera',
    template: '<header><h1>{{titulo}}</h1></header>',
    styles: `
        h1 {
            font-family: sans-serif;

            background-color: black;
            color: white;

            margin: 0;
            padding: 0.25rem;

            text-align: center;
        }
    `
})
export class CabeceraComponent {
    titulo = 'Ejemplos de Angular';
}
