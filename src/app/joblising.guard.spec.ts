import { TestBed, async, inject } from '@angular/core/testing';

import { JoblisingGuard } from './joblising.guard';

describe('JoblisingGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JoblisingGuard]
    });
  });

  it('should ...', inject([JoblisingGuard], (guard: JoblisingGuard) => {
    expect(guard).toBeTruthy();
  }));
});
