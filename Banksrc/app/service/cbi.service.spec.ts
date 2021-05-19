import { TestBed } from '@angular/core/testing';

import { CbiService } from './cbi.service';

describe('CbiService', () => {
  let service: CbiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CbiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
