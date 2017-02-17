import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { CalculationType } from './calculation-type.interface';
import handleError from '../shared/handle-error';
import { Observable } from 'rxjs/Rx'; 

@Injectable()
export class CalculationTypeService {
  private calculationTypeUrl = "/Lookup/CalculationTypes";

  constructor(private http: Http) { }

  getAllCalculationTypes(): Observable<CalculationType[]> {
    return this.http.get(this.calculationTypeUrl)
      .map((response: Response) => 
        response.json()['CalculationTypeDTOs'] as CalculationType[])
      .catch(handleError);
  }
}
