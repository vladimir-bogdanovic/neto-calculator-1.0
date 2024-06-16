import { Routes } from '@angular/router';
import { NetoComponent } from './components/neto/neto.component';

export const routes: Routes = [
  { path: '', redirectTo: '/neto', pathMatch: 'full' },
  {
    path: 'neto',
    component: NetoComponent,
  },
];
