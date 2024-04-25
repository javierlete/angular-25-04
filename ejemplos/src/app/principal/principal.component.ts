import { Component } from '@angular/core';
import { LabelInputComponent } from '../label-input/label-input.component';
import { PersonaComponent } from '../persona/persona.component';
import { Persona } from '../persona';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [LabelInputComponent, PersonaComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {
  nombre = '';
  pepe: Persona = { 
    id: 2, 
    nombre: 'Pepe', 
    apellidos: 'Pérez', 
    fechaNacimiento: new Date('2000-01-02') 
  };
  saludar(nombreRecibido: string) {
    this.nombre = nombreRecibido;
  }

  onNombreCambiado(nombreRecibido: string) {
    this.nombre = nombreRecibido;
  }

}
