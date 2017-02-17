/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AttributePropertyService } from './attribute-property.service';

describe('Service: AttributeProperty', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AttributePropertyService]
    });
  });

  it('should ...', inject([AttributePropertyService], (service: AttributePropertyService) => {
    expect(service).toBeTruthy();
  }));
});
