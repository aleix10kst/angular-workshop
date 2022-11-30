import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SwapiService } from '@angular-workshop/web/data-access';
import { switchMap } from 'rxjs';

@Component({
  selector: 'angular-workshop-starship-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './starship-detail.component.html',
  styleUrls: ['./starship-detail.component.scss'],
})
export default class StarshipDetailComponent {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly swapiService = inject(SwapiService);

  starship$ = this.activatedRoute.params.pipe(
    switchMap(({ id }: Record<string, string>) =>
      this.swapiService.getStarship(id)
    )
  );
}
