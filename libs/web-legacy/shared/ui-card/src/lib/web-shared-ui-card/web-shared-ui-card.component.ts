import { Component, Input } from '@angular/core';

@Component({
  selector: 'angular-workshop-web-shared-ui-card',
  templateUrl: './web-shared-ui-card.component.html',
  styleUrls: ['./web-shared-ui-card.component.css'],
})
export class WebSharedUiCardComponent {
  @Input() title = '';
}
