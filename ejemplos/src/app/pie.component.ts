import { Component } from "@angular/core";

@Component({
    standalone: true,
    selector: 'app-pie',
    template: `
        <footer>
            <p>&copy;2024 Javier Lete</p>
        </footer>
    `,
    styles: `
        footer {
            background-color: black;
            color: white;
            
            padding: 0.25rem;
        }
    `

})
export class PieComponent {}
