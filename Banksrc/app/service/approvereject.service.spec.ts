import { TestBed } from '@angular/core/testing';

import { ApproverejectService } from './approvereject.service';

describe('ApproverejectService', () => {
  let service: ApproverejectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApproverejectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
