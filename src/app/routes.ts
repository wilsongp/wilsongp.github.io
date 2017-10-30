import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/containers/page-not-found';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: './core/containers/core.module#CoreModule'
  },
  { path: '**', component: PageNotFoundComponent },
];
