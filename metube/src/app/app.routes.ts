import { Routes } from '@angular/router';
import { PastillasComponent } from './componentes/pastillas/pastillas.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';

export const routes: Routes = [
    { path: '', component: PastillasComponent },
    { path: 'formulario', component: FormularioComponent }
];
