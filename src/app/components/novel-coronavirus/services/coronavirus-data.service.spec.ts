import { TestBed } from '@angular/core/testing';

import { CoronavirusDataService } from './coronavirus-data.service';

describe('CoronavirusDataService', () => {
  let service: CoronavirusDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoronavirusDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
