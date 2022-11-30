import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebPlanetsComponent } from './web-planets.component';

describe('WebPlanetsComponent', () => {
  let component: WebPlanetsComponent;
  let fixture: ComponentFixture<WebPlanetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebPlanetsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WebPlanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
