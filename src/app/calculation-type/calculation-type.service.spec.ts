/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CalculationTypeService } from './calculation-type.service';

describe('Service: CalculationType', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculationTypeService]
    });
  });

  it('should ...', inject([CalculationTypeService], (service: CalculationTypeService) => {
    expect(service).toBeTruthy();
  }));
});
