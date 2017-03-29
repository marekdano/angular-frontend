import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { TimeUnit } from './time-unit.interface';
import handleError from '../shared/handle-error';
import { Observable } from 'rxjs/Rx'; 

@Injectable()
export class TimeUnitService {
  private timeUnitUrl = '/WS/Lookup/TimeUnits';
  private timeUnits: Observable<TimeUnit[]>;

  constructor(private http: Http) { }

  getAllTimeUnits(): Observable<TimeUnit[]> {
    if(!this.timeUnits) {
      this.timeUnits = this.http.get(this.timeUnitUrl)
        .map((response: Response) => 
          response.json()['TimeUnitDTOs'] as TimeUnit[])
        .publishReplay(1)
        .refCount()
        .catch(handleError);
    }
    return this.timeUnits;
  }
}
