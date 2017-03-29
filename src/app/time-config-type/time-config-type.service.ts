import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { TimeConfigType } from './time-config-type.interface';
import handleError from '../shared/handle-error';
import { Observable } from 'rxjs/Rx'; 

@Injectable()
export class TimeConfigTypeService {
  private timeConfigTypeUrl = '/WS/Lookup/TimeConfigTypes';
  private timeConfigTypes: Observable<TimeConfigType[]>;

  constructor(private http: Http) { }

  getAllTimeConfigTypes(): Observable<TimeConfigType[]> {
    if(!this.timeConfigTypes) {
      this.timeConfigTypes = this.http.get(this.timeConfigTypeUrl)
        .map((response: Response) => 
          response.json()['TimeConfigTypeDTOs'] as TimeConfigType[])
        .publishReplay(1)
        .refCount()
        .catch(handleError)
    }
    return this.timeConfigTypes;
  }
}
