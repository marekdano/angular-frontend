import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import handleError from './handle-error';
import { Observable } from 'rxjs/Rx'; 

@Injectable()
export class DataSourceNamesService {
  private dataSourceNamesUrl = "/WS/Lookup/DataSourceNames";
  private dataSources: Observable<string[]>;

  constructor(private http: Http) { }

  getDataSourceNames(): Observable<string[]> {
    if(!this.dataSources) {
      this.dataSources = this.http.get(this.dataSourceNamesUrl)
        .map((response: Response) => 
          response.json()['DataSourceNames'] as string[])
        .catch(handleError);
    }
    return this.dataSources;
  }
}
