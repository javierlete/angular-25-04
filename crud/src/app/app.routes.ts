import { Routes } from '@angular/router';
import { TablaComponent } from './tabla/tabla.component';
import { FormularioComponent } from './formulario/formulario.component';

export const routes: Routes = [
    { path: '', component: TablaComponent },
    { path: 'form', component: FormularioComponent },
    { path: 'form/:id', component: FormularioComponent },
];
