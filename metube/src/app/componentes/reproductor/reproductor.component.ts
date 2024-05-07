import { Component, Sanitizer, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Video } from '../../tipos/video';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { VideosService } from '../../servicios/videos.service';

@Component({
  selector: 'app-reproductor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reproductor.component.html',
  styleUrl: './reproductor.component.css'
})
export class ReproductorComponent {
  id!: number;
  video!: Video;
  urlVideo!: SafeResourceUrl;
  sanitizer = inject(DomSanitizer);
  servicio = inject(VideosService);

  ruta = inject(ActivatedRoute);

  constructor() {
    this.id = Number(this.ruta.snapshot.params['id']);

    this.servicio.obtenerPorId(this.id).then(
      videoRecibido => {
        this.video = videoRecibido;
        this.urlVideo = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.video.url);
      }
    );

  }
}
