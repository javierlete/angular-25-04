import { Component, Input } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-persona',
  standalone: true,
  imports: [],
  template: `
    <dl>
      <dt>Id</dt>
      <dd>{{persona.id}}</dd>
      <dt>Nombre</dt>
      <dd>{{persona.nombre}}</dd>
      <dt>Apellidos</dt>
      <dd>{{persona.apellidos}}</dd>
      <dt>Fecha de nacimiento</dt>
      <dd>{{persona.fechaNacimiento?.toLocaleDateString()}}</dd>
    </dl>
  `,
  styleUrl: './persona.component.css'
})
export class PersonaComponent {
  @Input() persona: Persona = {
    id: 1,
    nombre: 'Javier',
    apellidos: 'Lete',
    fechaNacimiento: new Date('2000-01-02'),
  }
}
