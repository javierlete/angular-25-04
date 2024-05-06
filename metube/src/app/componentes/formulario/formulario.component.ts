import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { VIDEOS } from '../../mocks/videos';
import { Video } from '../../tipos/video';
import { Location } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
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

  guardar() {
    console.log(this.form.value);
    VIDEOS.push(this.form.value as Video);
    this.location.back();
  }
}
