/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ContainerTypeService } from './container-type.service';

describe('Service: ContainerType', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContainerTypeService]
    });
  });

  it('should ...', inject([ContainerTypeService], (service: ContainerTypeService) => {
    expect(service).toBeTruthy();
  }));
});
