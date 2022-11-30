import { Route } from '@angular/router';
import { DarkForceGuard } from './dark-force.guard';
import { PeopleDetailComponent } from './people-detail/people-detail.component';
import { WebPeopleComponent } from './web-people/web-people.component';

export const webLegacyPeopleRoutes: Route[] = [
  {
    path: '',
    component: WebPeopleComponent,
    children: [
      {
        path: ':id',
        component: PeopleDetailComponent,
        canActivate: [DarkForceGuard],
      },
    ],
  },
];
