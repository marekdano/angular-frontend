/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TimeConfigTypeService } from './time-config-type.service';

describe('Service: TimeConfigType', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimeConfigTypeService]
    });
  });

  it('should ...', inject([TimeConfigTypeService], (service: TimeConfigTypeService) => {
    expect(service).toBeTruthy();
  }));
});
