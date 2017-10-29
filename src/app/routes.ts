import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/containers/page-not-found';

export const routes: Routes = [
  { path: '', redirectTo: '/todos', pathMatch: 'full' },
  {
    path: 'todos',
    loadChildren: './todos/todos.module#TodosModule'
  },
  { path: '**', component: PageNotFoundComponent },
];
