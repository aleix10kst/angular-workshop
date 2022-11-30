import { TestBed } from '@angular/core/testing';

import { DarkForceGuard } from './dark-force.guard';

describe('DarkForceGuard', () => {
  let guard: DarkForceGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DarkForceGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
