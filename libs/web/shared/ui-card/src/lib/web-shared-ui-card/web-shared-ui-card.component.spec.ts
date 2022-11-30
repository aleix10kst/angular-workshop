import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebSharedUiCardComponent } from './web-shared-ui-card.component';

describe('WebSharedUiCardComponent', () => {
  let component: WebSharedUiCardComponent;
  let fixture: ComponentFixture<WebSharedUiCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebSharedUiCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WebSharedUiCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
