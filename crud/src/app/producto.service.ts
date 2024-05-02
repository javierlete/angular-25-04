import { Injectable } from '@angular/core';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  productos: Producto[] = [
    { id: 1, nombre: 'Portátil', precio: 1234.12 },
    { id: 2, nombre: 'Monitor', precio: 123.12 },
    { id: 3, nombre: 'Ratón', precio: 12.12 },
  ];

  obtenerProductos(): Promise<Producto[]> {
    return new Promise(resolve => resolve(this.productos));
  }
}
