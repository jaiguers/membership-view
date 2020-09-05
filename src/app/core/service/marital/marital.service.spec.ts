import { TestBed } from '@angular/core/testing';

import { MaritalService } from './marital.service';

describe('MaritalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MaritalService = TestBed.get(MaritalService);
    expect(service).toBeTruthy();
  });
});
