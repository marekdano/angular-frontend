import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { CalculationType } from './calculation-type.interface';
import handleError from '../shared/handle-error';
import { Observable } from 'rxjs/Rx'; 

@Injectable()
export class CalculationTypeService {
  private calculationTypeUrl = "/WS/Lookup/CalculationTypes";
  private calculationTypes: Observable<CalculationType[]>;

  constructor(private http: Http) { }

  getAllCalculationTypes(): Observable<CalculationType[]> {
    if(!this.calculationTypes) {
      this.calculationTypes = this.http.get(this.calculationTypeUrl)
        .map((response: Response) => 
          response.json()['CalculationTypeDTOs'] as CalculationType[])
        .publishReplay(1)
        .refCount()
        .catch(handleError);
    }
    return this.calculationTypes;
  }
}
