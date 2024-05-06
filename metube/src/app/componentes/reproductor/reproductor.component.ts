import { Component, Sanitizer, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VIDEOS } from '../../mocks/videos';
import { Video } from '../../tipos/video';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

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

  ruta = inject(ActivatedRoute);

  constructor() {
    this.id = Number(this.ruta.snapshot.params['id']);

    this.video = VIDEOS.find(video => video.id === this.id)!;

    this.urlVideo = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.video.url);
  }
}
