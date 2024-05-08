import { Component, Input, inject } from '@angular/core';
import { Video } from '../../tipos/video';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ValoracionComponent } from '../valoracion/valoracion.component';
import { VideosService } from '../../servicios/videos.service';

@Component({
  selector: 'app-pastilla',
  standalone: true,
  imports: [CommonModule, RouterLink, ValoracionComponent],
  templateUrl: './pastilla.component.html',
  styleUrl: './pastilla.component.css'
})
export class PastillaComponent {
  @Input() video?: Video;
  servicio = inject(VideosService);

  onValoracionChange(valoracion: number) {
    if(this.video) {
      this.servicio.valorar(this.video.id, valoracion).then(
        () => {
          if(this.video) {
            this.video.valoracion = valoracion;
          }
        }
      )
    }
  }
}
