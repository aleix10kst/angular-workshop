import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebPeopleComponent } from './web-people.component';

describe('WebPeopleComponent', () => {
  let component: WebPeopleComponent;
  let fixture: ComponentFixture<WebPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebPeopleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WebPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
