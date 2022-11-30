import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WebSharedUiCardComponent } from '@angular-workshop/web/shared/ui-card';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, WebSharedUiCardComponent, RouterModule],
  selector: 'angular-workshop-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'web';
}
