import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { SwapiLegacyService } from '@angular-workshop/web-legacy/data-access';

@Component({
  selector: 'angular-workshop-starship-detail',
  templateUrl: './starship-detail.component.html',
  styleUrls: ['./starship-detail.component.scss'],
})
export class StarshipDetailComponent {
  starship$ = this.activatedRoute.params.pipe(
    switchMap(({ id }: Record<string, string>) =>
      this.swapiService.getStarship(id)
    )
  );

  constructor(
    private readonly swapiService: SwapiLegacyService,
    private readonly activatedRoute: ActivatedRoute
  ) {}
}
