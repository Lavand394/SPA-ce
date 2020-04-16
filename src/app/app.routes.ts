import { RouterModule, Routes } from '@angular/router';
import {HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PlanetsComponent } from './components/planets/planets.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'planets', component: PlanetsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
