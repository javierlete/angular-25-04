import { Component, inject } from '@angular/core';
import { PastillaComponent } from '../pastilla/pastilla.component';
import { CommonModule } from '@angular/common';
import { Video } from '../../tipos/video';
import { VideosService } from '../../servicios/videos.service';

@Component({
  selector: 'app-pastillas',
  standalone: true,
  imports: [PastillaComponent, CommonModule],
  templateUrl: './pastillas.component.html',
  styleUrl: './pastillas.component.css'
})
export class PastillasComponent {
  videos: Video[] = [];
  servicio = inject(VideosService);

  constructor() {
    this.servicio.obtenerTodos().then(
      videosRecibidos => this.videos = videosRecibidos
    );
  }
}
