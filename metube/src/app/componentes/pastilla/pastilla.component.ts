import { Component, Input } from '@angular/core';
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
  @Input() video?: Video;
}
