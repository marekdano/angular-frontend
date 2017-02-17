/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TimeUnitService } from './time-unit.service';

describe('Service: TimeUnit', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimeUnitService]
    });
  });

  it('should ...', inject([TimeUnitService], (service: TimeUnitService) => {
    expect(service).toBeTruthy();
  }));
});
