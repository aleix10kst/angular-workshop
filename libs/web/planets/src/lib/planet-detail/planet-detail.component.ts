import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SwapiService } from '@angular-workshop/web/data-access';
import { switchMap } from 'rxjs';

@Component({
  selector: 'angular-workshop-planet-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.scss'],
})
export class PlanetDetailComponent {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly swapiService = inject(SwapiService);

  planet$ = this.activatedRoute.params.pipe(
    switchMap(({ id }: Record<string, string>) =>
      this.swapiService.getPlanet(id)
    )
  );
}
