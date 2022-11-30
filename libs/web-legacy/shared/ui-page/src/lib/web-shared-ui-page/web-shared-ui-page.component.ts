import { Component, Input } from '@angular/core';

@Component({
  selector: 'angular-workshop-web-shared-ui-page',
  templateUrl: './web-shared-ui-page.component.html',
  styleUrls: ['./web-shared-ui-page.component.css'],
})
export class WebSharedUiPageComponent {
  @Input() title = '';
}
