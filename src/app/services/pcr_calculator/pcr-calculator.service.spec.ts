import { TestBed } from '@angular/core/testing';

import { PcrCalculatorService } from './pcr-calculator.service';

describe('PcrCalculatorService', () => {
  let service: PcrCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PcrCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
