import { TestBed } from '@angular/core/testing';

import { AuttserviceService } from './auttservice.service';

describe('AuttserviceService', () => {
  let service: AuttserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuttserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
