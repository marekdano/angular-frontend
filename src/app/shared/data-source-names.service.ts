import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import handleError from './handle-error';
import { Observable } from 'rxjs/Rx'; 

@Injectable()
export class DataSourceNamesService {
  private dataSourceNamesUrl = "/Lookup/DataSourceNames";

  constructor(private http: Http) { }

  getDataSourceNames(): Observable<string[]> {
    return this.http.get(this.dataSourceNamesUrl)
      .map((response: Response) => 
        response.json()['DataSourceNames'] as string[])
      .catch(handleError);
  }
}
