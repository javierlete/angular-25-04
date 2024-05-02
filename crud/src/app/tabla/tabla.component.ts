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
    this.cargarProductos();
  }

  private cargarProductos() {
    this.servicio.obtenerProductos().then(productosRecibidos => this.productos = productosRecibidos);
  }

  borrar(id: number) {
    this.servicio.borrarProducto(id).then(() => this.cargarProductos());
  }
}
