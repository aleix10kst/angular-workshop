import { Route } from '@angular/router';
import { StarshipDetailComponent } from './starship-detail/starship-detail.component';
import { WebStarshipsComponent } from './web-starships/web-starships.component';

export const webLegacyStarshipsRoutes: Route[] = [
  {
    path: '',
    component: WebStarshipsComponent,
    children: [
      {
        path: ':id',
        component: StarshipDetailComponent,
      },
    ],
  },
];
