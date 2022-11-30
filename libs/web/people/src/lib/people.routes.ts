import { SwapiService } from '@angular-workshop/web/data-access';
import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, Routes } from '@angular/router';
import { WebPeopleComponent } from './web-people/web-people.component';

export const PEOPLE_ROUTES: Routes = [
  {
    path: '',
    component: WebPeopleComponent,
    children: [
      {
        path: ':id',
        loadComponent: () =>
          import('./people-detail/people-detail.component').then(
            (c) => c.PeopleDetailComponent
          ),
        canActivate: [
          (activatedRoute: ActivatedRouteSnapshot) => {
            const swapiService = inject(SwapiService);
            console.log(swapiService);
            return activatedRoute.paramMap.get('id') !== '4';
          },
        ],
      },
    ],
  },
];
