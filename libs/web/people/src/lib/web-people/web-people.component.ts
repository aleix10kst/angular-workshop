import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebSharedUiPageComponent } from '@angular-workshop/web/shared/ui-page';
import { RouterModule } from '@angular/router';
import { ExtractEntityIdPipe } from '@angular-workshop/web/shared/util-pipes';
import { SwapiService } from '@angular-workshop/web/data-access';

@Component({
  selector: 'angular-workshop-web-people',
  standalone: true,
  imports: [
    CommonModule,
    WebSharedUiPageComponent,
    RouterModule,
    ExtractEntityIdPipe,
  ],
  templateUrl: './web-people.component.html',
  styleUrls: ['./web-people.component.css'],
})
export class WebPeopleComponent {
  private readonly swapiService = inject(SwapiService);
  readonly people$ = this.swapiService.getPeople();
}
