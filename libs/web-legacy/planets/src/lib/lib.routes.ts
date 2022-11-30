import { Route } from '@angular/router';
import { PlanetDetailComponent } from './planet-detail/planet-detail.component';
import { WebPlanetsComponent } from './planets/web-planets.component';

export const webLegacyPlanetsRoutes: Route[] = [
  {
    path: '',
    component: WebPlanetsComponent,
    children: [
      {
        path: ':id',
        component: PlanetDetailComponent,
      },
    ],
  },
];
