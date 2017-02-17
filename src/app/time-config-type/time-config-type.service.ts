import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { TimeConfigType } from './time-config-type.interface';
import handleError from '../shared/handle-error';
import { Observable } from 'rxjs/Rx'; 

@Injectable()
export class TimeConfigTypeService {
  private timeConfigTypeUrl = '/Lookup/TimeConfigTypes';

  constructor(private http: Http) { }

  getAllTimeConfigTypes(): Observable<TimeConfigType[]> {
    return this.http.get(this.timeConfigTypeUrl)
      .map((response: Response) => 
        response.json()['TimeConfigTypeDTOs'] as TimeConfigType[])
      .catch(handleError)
  }
}
