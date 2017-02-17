/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { QueryTypeService } from './query-type.service';

describe('Service: QueryType', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QueryTypeService]
    });
  });

  it('should ...', inject([QueryTypeService], (service: QueryTypeService) => {
    expect(service).toBeTruthy();
  }));
});
