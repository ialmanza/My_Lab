import { TestBed } from '@angular/core/testing';

import { CadenasADNServiceService } from './cadenas-adnservice.service';

describe('CadenasADNServiceService', () => {
  let service: CadenasADNServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadenasADNServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
