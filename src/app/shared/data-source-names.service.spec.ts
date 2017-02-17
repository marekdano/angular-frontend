/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DataSourceNamesService } from './data-source-names.service';

describe('Service: DataSourceNames', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataSourceNamesService]
    });
  });

  it('should ...', inject([DataSourceNamesService], (service: DataSourceNamesService) => {
    expect(service).toBeTruthy();
  }));
});
