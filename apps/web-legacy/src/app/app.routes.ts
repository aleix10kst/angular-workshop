import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: 'planets',
    loadChildren: () =>
      import('@angular-workshop/web-legacy/planets').then(
        (m) => m.WebLegacyPlanetsModule
      ),
  },
  {
    path: 'people',
    loadChildren: () =>
      import('@angular-workshop/web-legacy/people').then(
        (m) => m.WebLegacyPeopleModule
      ),
  },
  {
    path: 'starships',
    loadChildren: () =>
      import('@angular-workshop/web-legacy/starships').then(
        (m) => m.WebLegacyStarshipsModule
      ),
  },
];
