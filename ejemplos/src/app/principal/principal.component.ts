import { Component } from '@angular/core';
import { LabelInputComponent } from '../label-input/label-input.component';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [LabelInputComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {
  nombre = '';
  saludar(nombreRecibido: string) {
    this.nombre = nombreRecibido;
  }
  
  onNombreCambiado(nombreRecibido: string) {
    this.nombre = nombreRecibido;
  }

}
