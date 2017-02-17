/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FrequencyService } from './frequency.service';

describe('Service: Frequency', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FrequencyService]
    });
  });

  it('should ...', inject([FrequencyService], (service: FrequencyService) => {
    expect(service).toBeTruthy();
  }));
});
