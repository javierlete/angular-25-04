import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlertaComponent } from './alerta.component';
import { CabeceraComponent } from './cabecera.component';
import { MenuComponent } from './menu.component';
import { PieComponent } from './pie.component';
import { PrincipalComponent } from './principal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AlertaComponent, CabeceraComponent, MenuComponent, PrincipalComponent, PieComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ejemplos de Angular';
}
