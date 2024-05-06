import { Component, Input } from '@angular/core';
import { Video } from '../../tipos/video';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pastilla',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './pastilla.component.html',
  styleUrl: './pastilla.component.css'
})
export class PastillaComponent {
  @Input() video?: Video;
}
