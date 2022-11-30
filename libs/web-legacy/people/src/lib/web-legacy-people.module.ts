import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { webLegacyPeopleRoutes } from './lib.routes';
import { WebPeopleComponent } from './web-people/web-people.component';
import { PeopleDetailComponent } from './people-detail/people-detail.component';
import { WebLegacySharedUtilPipesModule } from '@angular-workshop/web-legacy/shared/util-pipes';
import { WebLegacySharedUiPageModule } from '@angular-workshop/web-legacy/shared/ui-page';

@NgModule({
  declarations: [WebPeopleComponent, PeopleDetailComponent],
  imports: [
    CommonModule,
    WebLegacySharedUtilPipesModule,
    WebLegacySharedUiPageModule,
    RouterModule.forChild(webLegacyPeopleRoutes),
  ],
})
export class WebLegacyPeopleModule {}
