import { Component } from '@angular/core';
import { VIDEOS } from '../../mocks/videos';
import { PastillaComponent } from '../pastilla/pastilla.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pastillas',
  standalone: true,
  imports: [PastillaComponent, CommonModule],
  templateUrl: './pastillas.component.html',
  styleUrl: './pastillas.component.css'
})
export class PastillasComponent {
  videos = VIDEOS;
}
