import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Producto } from '../producto';
import { CommonModule } from '@angular/common';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {
  productos: Producto[] = [];
  servicio = inject(ProductoService);

  constructor() {
    this.productos = this.servicio.obtenerProductos();
  }
}
