import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwapiService } from '@angular-workshop/web/data-access';
import { WebSharedUiPageComponent } from '@angular-workshop/web/shared/ui-page';
import { RouterModule } from '@angular/router';
import { ExtractEntityIdPipe } from '@angular-workshop/web/shared/util-pipes';

@Component({
  selector: 'angular-workshop-web-planets',
  standalone: true,
  imports: [
    CommonModule,
    WebSharedUiPageComponent,
    RouterModule,
    ExtractEntityIdPipe,
  ],
  templateUrl: './web-planets.component.html',
  styleUrls: ['./web-planets.component.css'],
})
export class WebPlanetsComponent {
  private readonly swapiService = inject(SwapiService);

  readonly planets$ = this.swapiService.getPlanets();
}
