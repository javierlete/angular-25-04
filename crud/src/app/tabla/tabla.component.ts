import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Producto } from '../producto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {
  productos: Producto[] = [
    { id: 1, nombre: 'Portátil', precio: 1234.12 },
    { id: 2, nombre: 'Monitor', precio: 123.12 },
    { id: 3, nombre: 'Ratón', precio: 12.12 },
  ];
}
