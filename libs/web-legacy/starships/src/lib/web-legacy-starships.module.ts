import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { webLegacyStarshipsRoutes } from './lib.routes';
import { WebStarshipsComponent } from './web-starships/web-starships.component';
import { StarshipDetailComponent } from './starship-detail/starship-detail.component';
import { WebLegacySharedUiPageModule } from '@angular-workshop/web-legacy/shared/ui-page';
import { WebLegacySharedUtilPipesModule } from '@angular-workshop/web-legacy/shared/util-pipes';

@NgModule({
  declarations: [WebStarshipsComponent, StarshipDetailComponent],
  imports: [
    CommonModule,
    WebLegacySharedUiPageModule,
    WebLegacySharedUtilPipesModule,
    RouterModule.forChild(webLegacyStarshipsRoutes),
  ],
})
export class WebLegacyStarshipsModule {}
