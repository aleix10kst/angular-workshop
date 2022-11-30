import { Routes } from '@angular/router';
import { WebPlanetsComponent } from './planets/web-planets.component';

export const PLANETS_ROUTES: Routes = [
  {
    path: '',
    component: WebPlanetsComponent,
    children: [
      {
        path: ':id',
        loadComponent: () =>
          import('./planet-detail/planet-detail.component').then(
            (c) => c.PlanetDetailComponent
          ),
      },
    ],
  },
];
