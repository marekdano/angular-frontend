/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConditionService } from './condition.service';

describe('Service: Condition', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConditionService]
    });
  });

  it('should ...', inject([ConditionService], (service: ConditionService) => {
    expect(service).toBeTruthy();
  }));
});
