import { Routes } from '@angular/router';
import { WebStarshipsComponent } from './web-starships/web-starships.component';

export const STARSHIPS_ROUES: Routes = [
  {
    path: '',
    component: WebStarshipsComponent,
    children: [
      {
        path: ':id',
        loadComponent: () =>
          import('./starship-detail/starship-detail.component'),
      },
    ],
  },
];
