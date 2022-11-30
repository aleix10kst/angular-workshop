import { SwapiLegacyService } from '@angular-workshop/web-legacy/data-access';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'angular-workshop-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.scss'],
})
export class PeopleDetailComponent {
  person$ = this.activatedRoute.params.pipe(
    switchMap(({ id }: Record<string, string>) =>
      this.swapiService.getPerson(id)
    )
  );
  constructor(
    private readonly swapiService: SwapiLegacyService,
    private readonly activatedRoute: ActivatedRoute
  ) {}
}
