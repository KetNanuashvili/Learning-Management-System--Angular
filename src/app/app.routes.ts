import { Routes } from '@angular/router';
import { MainAuth } from './registration/main-auth/main-auth';
import { MainRegistration } from './registration/main-registration/main-registration/main-registration';

export const routes: Routes = [
  { path: 'login', component: MainAuth },
  { path: 'register', component: MainRegistration },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

