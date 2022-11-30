import { Component } from '@angular/core';
import { SwapiLegacyService } from '@angular-workshop/web-legacy/data-access';

@Component({
  selector: 'angular-workshop-web-starships',
  templateUrl: './web-starships.component.html',
  styleUrls: ['./web-starships.component.css'],
})
export class WebStarshipsComponent {
  readonly starships$ = this.swapiService.getStarships();

  constructor(private readonly swapiService: SwapiLegacyService) {}
}
