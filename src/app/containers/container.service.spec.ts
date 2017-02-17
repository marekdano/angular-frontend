/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ContainerService } from './container.service';

describe('Service: Container', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContainerService]
    });
  });

  it('should be initialised', inject([ContainerService], (service: ContainerService) => {
    expect(service).toBeTruthy();
  }));

  it('should return an empty array by default', inject([ContainerService], (service: ContainerService) => {
    expect(service.getAllContainers()).toEqual([]);
  }));

  it('should return all containers', inject([ContainerService], (service: ContainerService) => {
    let container1 = { containerName: "Filler 1", 
                      plantArea: "Inside", 
                      containerType: "new", 
                      maxQuantity: 3,
                      defaultBatchName: "Batch Name",
                      containerNumber: 77 };
    let container2 = { containerName: "Filler 3", 
                      plantArea: "Inside", 
                      containerType: "new", 
                      maxQuantity: 3,
                      defaultBatchName: "Batch Name",
                      containerNumber: 77 };
    let container3 = { containerName: 'Filler 5', 
                      plantArea: 'Inside', 
                      containerType: 'new', 
                      maxQuantity: 3, 
                      defaultBatchName: 'Batch Name', 
                      containerNumber: 77 };
    expect(service.getAllContainers()).toEqual([container1, container2, container3]);
  }));
});
