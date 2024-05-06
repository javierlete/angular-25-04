import { Component } from '@angular/core';
import { Video } from '../../tipos/video';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pastilla',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pastilla.component.html',
  styleUrl: './pastilla.component.css'
})
export class PastillaComponent {
  video: Video = {
    id: 1,
    horas: 3,
    minutos: 2,
    segundos: 1,
    titulo: 'Video de prueba',
    descripcion: 'Este es un video de prueba para la plataforma',
    urlFoto: 'https://i.ytimg.com/an_webp/uI0_TO46K4A/mqdefault_6s.webp?du=3000&sqp=CKCe47EG&rs=AOn4CLDM1bGXMhs3OvBI1zFr3ccyeL03eg',
    url: 'https://www.youtube.com/embed/uI0_TO46K4A?si=U_6uTv-j-1MkrXB8'
  };
}
