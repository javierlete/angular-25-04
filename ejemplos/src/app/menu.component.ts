import { Component } from "@angular/core";

@Component({
    standalone: true,
    selector: 'app-menu',
    template: `
        <nav>
            <ul>
                <li><a href="#">Opción 1</a></li>
                <li><a href="#">Opción 2</a></li>
                <li><a href="#">Opción 3</a></li>
                <li><a href="#">Opción 4</a></li>
            </ul>
        </nav>
    `,
    styles: `
        ul {
            display: flex;
            justify-content: space-around;

            padding: 0.25rem;

            background-color: lightgray;
        }

        li {
            list-style: none;
        }

        a {
            text-decoration: none;
            color: black;
        }
    `
})
export class MenuComponent {}
