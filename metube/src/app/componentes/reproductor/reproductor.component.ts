import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeguroPipe } from '../../pipes/seguro.pipe';
import { VideosService } from '../../servicios/videos.service';
import { Video } from '../../tipos/video';

@Component({
  selector: 'app-reproductor',
  standalone: true,
  imports: [CommonModule, SeguroPipe],
  templateUrl: './reproductor.component.html',
  styleUrl: './reproductor.component.css'
})
export class ReproductorComponent {
  id!: number;
  video: Video = {} as Video;
  servicio = inject(VideosService);

  ruta = inject(ActivatedRoute);

  constructor() {
    this.id = Number(this.ruta.snapshot.params['id']);

    this.servicio.obtenerPorId(this.id).then(
      videoRecibido => this.video = videoRecibido);
  }
}
