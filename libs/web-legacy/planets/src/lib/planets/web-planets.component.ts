import { Component } from '@angular/core';
import { SwapiLegacyService } from '@angular-workshop/web-legacy/data-access';

@Component({
  selector: 'angular-workshop-web-planets',
  templateUrl: './web-planets.component.html',
  styleUrls: ['./web-planets.component.css'],
})
export class WebPlanetsComponent {
  readonly planets$ = this.swapiService.getPlanets();

  constructor(private readonly swapiService: SwapiLegacyService) {}
}
