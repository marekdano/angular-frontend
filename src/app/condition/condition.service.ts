import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Condition } from './condition.interface';
import handleError from '../shared/handle-error';
import { Observable } from 'rxjs/Rx'; 

@Injectable()
export class ConditionService {
  private conditionUrl = '/WS/Lookup/Conditions';
  private conditions: Observable<Condition[]>;

  constructor(private http: Http) { }

  getAllConditions(): Observable<Condition[]> {
    if(!this.conditions) {
      this.conditions = this.http.get(this.conditionUrl)
        .map((response: Response) =>
          response.json()["ConditionDTOs"] as Condition[])
        .publishReplay(1)
        .refCount()
        .catch(handleError);
    }
    return this.conditions;
  }
}
