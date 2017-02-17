/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FileTypeService } from './file-type.service';

describe('Service: FileType', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileTypeService]
    });
  });

  it('should ...', inject([FileTypeService], (service: FileTypeService) => {
    expect(service).toBeTruthy();
  }));
});
