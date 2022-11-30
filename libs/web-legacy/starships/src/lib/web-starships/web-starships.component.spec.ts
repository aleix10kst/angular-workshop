import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebStarshipsComponent } from './web-starships.component';

describe('WebStarshipsComponent', () => {
  let component: WebStarshipsComponent;
  let fixture: ComponentFixture<WebStarshipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebStarshipsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WebStarshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
