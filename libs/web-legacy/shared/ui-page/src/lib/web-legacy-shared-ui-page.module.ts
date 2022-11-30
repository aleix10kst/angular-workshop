import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebSharedUiPageComponent } from './web-shared-ui-page/web-shared-ui-page.component';
import { RouterModule } from '@angular/router';
import { WebLegacySharedUiCardModule } from '@angular-workshop/web-legacy/shared/ui-card';

@NgModule({
  declarations: [WebSharedUiPageComponent],
  imports: [CommonModule, RouterModule, WebLegacySharedUiCardModule],
  exports: [WebSharedUiPageComponent],
})
export class WebLegacySharedUiPageModule {}
