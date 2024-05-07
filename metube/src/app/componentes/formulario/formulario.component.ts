import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Video } from '../../tipos/video';
import { Location } from '@angular/common';
import { VideosService } from '../../servicios/videos.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  servicio = inject(VideosService);
  location = inject(Location);
  form = new FormGroup({
    id: new FormControl(),
    url: new FormControl(),
    urlFoto: new FormControl(),
    titulo: new FormControl(),
    descripcion: new FormControl(),
    horas: new FormControl(),
    minutos: new FormControl(),
    segundos: new FormControl(),
  });

  async guardar() {
    console.log(this.form.value);
    await this.servicio.alta(this.form.value as Video);
    this.location.back();
  }
}
