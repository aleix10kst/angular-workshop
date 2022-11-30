import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter([
      {
        path: 'planets',
        loadChildren: () => import('@angular-workshop/web/planets'),
      },
      {
        path: 'people',
        loadChildren: () => import('@angular-workshop/web/people'),
      },
      {
        path: 'starships',
        loadChildren: () => import('@angular-workshop/web/starships'),
      },
    ]),
  ],
}).catch((err) => console.error(err));
