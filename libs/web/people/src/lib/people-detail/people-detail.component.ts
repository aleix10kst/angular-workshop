import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwapiService } from '@angular-workshop/web/data-access';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'angular-workshop-people-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.scss'],
})
export class PeopleDetailComponent {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly swapiService = inject(SwapiService);

  person$ = this.activatedRoute.params.pipe(
    switchMap(({ id }: Record<string, string>) =>
      this.swapiService.getPerson(id)
    )
  );
}
