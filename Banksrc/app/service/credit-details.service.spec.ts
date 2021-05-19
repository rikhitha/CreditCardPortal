import { TestBed } from '@angular/core/testing';

import { CreditDetailsService } from './credit-details.service';

describe('CreditDetailsService', () => {
  let service: CreditDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
