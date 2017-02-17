/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MethodTypeService } from './method-type.service';

describe('Service: MethodType', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MethodTypeService]
    });
  });

  it('should ...', inject([MethodTypeService], (service: MethodTypeService) => {
    expect(service).toBeTruthy();
  }));
});
