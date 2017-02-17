/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PlantAreaService } from './plant-area.service';

describe('Service: PlantArea', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlantAreaService]
    });
  });

  it('should ...', inject([PlantAreaService], (service: PlantAreaService) => {
    expect(service).toBeTruthy();
  }));
});
