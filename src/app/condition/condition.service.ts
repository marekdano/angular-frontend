import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Condition } from './condition.interface';
import handleError from '../shared/handle-error';
import { Observable } from 'rxjs/Rx'; 

@Injectable()
export class ConditionService {
  private conditionUrl = '/Lookup/Conditions';

  constructor(private http: Http) { }

  getAllConditions(): Observable<Condition[]> {
    return this.http.get(this.conditionUrl)
      .map((response: Response) =>
        response.json()["ConditionDTOs"] as Condition[])
      .catch(handleError);
  }
}
