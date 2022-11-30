import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { SwapiLegacyService } from '@angular-workshop/web-legacy/data-access';

@Component({
  selector: 'angular-workshop-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.scss'],
})
export class PlanetDetailComponent {
  planet$ = this.activatedRoute.params.pipe(
    switchMap(({ id }: Record<string, string>) =>
      this.swapiService.getPlanet(id)
    )
  );

  constructor(
    private readonly swapiService: SwapiLegacyService,
    private readonly activatedRoute: ActivatedRoute
  ) {}
}
