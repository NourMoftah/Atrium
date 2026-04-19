import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  { 
    path: 'login', 
    loadComponent: () => import('./components/login/login').then(c => c.Login) 
  },
  { 
    path: 'register', 
    loadComponent: () => import('./components/register/register').then(c => c.Register) 
  },
  { 
    path: 'dashboard', 
    loadComponent: () => import('./components/dashboard/dashboard').then(c => c.Dashboard) 
  },
  { path: '**', redirectTo: 'login' }

];
