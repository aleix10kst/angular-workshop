import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebSharedUiPageComponent } from './web-shared-ui-page.component';

describe('WebSharedUiPageComponent', () => {
  let component: WebSharedUiPageComponent;
  let fixture: ComponentFixture<WebSharedUiPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebSharedUiPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WebSharedUiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
