import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { webLegacyPlanetsRoutes } from './lib.routes';
import { WebPlanetsComponent } from './planets/web-planets.component';
import { PlanetDetailComponent } from './planet-detail/planet-detail.component';
import { WebLegacySharedUiPageModule } from '@angular-workshop/web-legacy/shared/ui-page';
import { WebLegacySharedUtilPipesModule } from '@angular-workshop/web-legacy/shared/util-pipes';

@NgModule({
  declarations: [WebPlanetsComponent, PlanetDetailComponent],
  imports: [
    CommonModule,
    WebLegacySharedUiPageModule,
    WebLegacySharedUtilPipesModule,
    RouterModule.forChild(webLegacyPlanetsRoutes),
  ],
})
export class WebLegacyPlanetsModule {}
