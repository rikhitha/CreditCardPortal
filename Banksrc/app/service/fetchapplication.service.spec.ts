import { TestBed } from '@angular/core/testing';

import { FetchapplicationService } from './fetchapplication.service';

describe('FetchapplicationService', () => {
  let service: FetchapplicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchapplicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
