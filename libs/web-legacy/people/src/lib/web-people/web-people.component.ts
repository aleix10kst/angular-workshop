import { Component } from '@angular/core';
import { SwapiLegacyService } from '@angular-workshop/web-legacy/data-access';

@Component({
  selector: 'angular-workshop-web-people',
  templateUrl: './web-people.component.html',
  styleUrls: ['./web-people.component.css'],
})
export class WebPeopleComponent {
  readonly people$ = this.swapiService.getPeople();

  constructor(private readonly swapiService: SwapiLegacyService) {}
}
