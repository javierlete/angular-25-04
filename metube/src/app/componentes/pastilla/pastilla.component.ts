import { Component, Input } from '@angular/core';
import { Video } from '../../tipos/video';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ValoracionComponent } from '../valoracion/valoracion.component';

@Component({
  selector: 'app-pastilla',
  standalone: true,
  imports: [CommonModule, RouterLink, ValoracionComponent],
  templateUrl: './pastilla.component.html',
  styleUrl: './pastilla.component.css'
})
export class PastillaComponent {
  @Input() video?: Video;
}
