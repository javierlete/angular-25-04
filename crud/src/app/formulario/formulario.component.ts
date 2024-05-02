import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductoService } from '../producto.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Producto } from '../producto';
import { Location } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  ruta = inject(ActivatedRoute);
  servicio = inject(ProductoService);
  location = inject(Location);

  form = new FormGroup({
    id: new FormControl(),
    nombre: new FormControl(),
    precio: new FormControl()
  });

  constructor() {
    const id = Number(this.ruta.snapshot.params['id']);

    if (id) {
      this.servicio.obtenerProductoPorId(id).then(productoRecibido => {
        this.form.setValue(productoRecibido);
      });
    }
  }

  async guardar() {
    const producto = this.form.value;

    if(producto.id) {
      await this.servicio.modificarProducto(producto as Producto);
    } else {
      await this.servicio.insertarProducto(producto as Producto);
    }

    this.location.back();
  }
}
