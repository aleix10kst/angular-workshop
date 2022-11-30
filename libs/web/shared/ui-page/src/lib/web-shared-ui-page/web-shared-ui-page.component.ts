import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebSharedUiCardComponent } from '@angular-workshop/web/shared/ui-card';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'angular-workshop-web-shared-ui-page',
  standalone: true,
  imports: [CommonModule, WebSharedUiCardComponent, RouterModule],
  templateUrl: './web-shared-ui-page.component.html',
  styleUrls: ['./web-shared-ui-page.component.css'],
})
export class WebSharedUiPageComponent {
  @Input() title = '';
}
