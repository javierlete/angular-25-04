import { Injectable } from '@angular/core';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url = 'http://127.0.0.1:3000/productos/';

  async obtenerProductos(): Promise<Producto[]> {
    const respuesta = await fetch(this.url);
    return await respuesta.json();
  }

  async obtenerProductoPorId(id: number): Promise<Producto> {
    const respuesta = await fetch(this.url + id);
    return await respuesta.json();
  }

  async borrarProducto(id: number): Promise<any> {
    return await fetch(this.url + id, { method: 'DELETE' });
  }
}
