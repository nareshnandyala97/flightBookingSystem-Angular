import { TestBed } from '@angular/core/testing';

import { flightService } from './flight.service';

describe('flightService', () => {
  let service: flightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(flightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
