import { NgModule } from '@angular/core';
import { ExtractEntityIdPipe } from './extract-entity-id.pipe';

@NgModule({
  declarations: [ExtractEntityIdPipe],
  exports: [ExtractEntityIdPipe],
})
export class WebLegacySharedUtilPipesModule {}
