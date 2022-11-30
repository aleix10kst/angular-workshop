import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkMenu, CdkMenuModule } from '@angular/cdk/menu';

@Component({
  selector: 'angular-workshop-web-shared-ui-card',
  standalone: true,
  imports: [CommonModule, CdkMenuModule],
  hostDirectives: [{ directive: CdkMenu }],
  templateUrl: './web-shared-ui-card.component.html',
  styleUrls: ['./web-shared-ui-card.component.css'],
})
export class WebSharedUiCardComponent {
  @Input() title = '';
}
