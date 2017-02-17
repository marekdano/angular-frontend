import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { TimeUnit } from './time-unit.interface';
import handleError from '../shared/handle-error';
import { Observable } from 'rxjs/Rx'; 

@Injectable()
export class TimeUnitService {
  private timeUnitUrl = '/Lookup/TimeUnits';

  constructor(private http: Http) { }

  getAllTimeUnits(): Observable<TimeUnit[]> {
    return this.http.get(this.timeUnitUrl)
      .map((response: Response) => 
        response.json()['TimeUnitDTOs'] as TimeUnit[])
      .catch(handleError);
  }
}
