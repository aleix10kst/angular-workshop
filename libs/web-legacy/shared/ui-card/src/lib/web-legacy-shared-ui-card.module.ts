import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebSharedUiCardComponent } from './web-shared-ui-card/web-shared-ui-card.component';

@NgModule({
  declarations: [WebSharedUiCardComponent],
  imports: [CommonModule],
  exports: [WebSharedUiCardComponent],
})
export class WebLegacySharedUiCardModule {}
