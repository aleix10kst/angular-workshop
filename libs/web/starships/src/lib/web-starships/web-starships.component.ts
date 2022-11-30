import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebLegacySharedUiPageModule } from '@angular-workshop/web-legacy/shared/ui-page';
import { RouterModule } from '@angular/router';
import { ExtractEntityIdPipe } from '@angular-workshop/web/shared/util-pipes';
import { SwapiService } from '@angular-workshop/web/data-access';

@Component({
  selector: 'angular-workshop-web-starships',
  standalone: true,
  imports: [
    CommonModule,
    WebLegacySharedUiPageModule,
    RouterModule,
    ExtractEntityIdPipe,
  ],
  templateUrl: './web-starships.component.html',
  styleUrls: ['./web-starships.component.css'],
})
export class WebStarshipsComponent {
  private readonly swapiService = inject(SwapiService);
  readonly starships$ = this.swapiService.getStarships();
}
