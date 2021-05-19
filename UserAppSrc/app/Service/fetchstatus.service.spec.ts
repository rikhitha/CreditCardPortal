import { TestBed } from '@angular/core/testing';

import { FetchstatusService } from './fetchstatus.service';

describe('FetchstatusService', () => {
  let service: FetchstatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchstatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
