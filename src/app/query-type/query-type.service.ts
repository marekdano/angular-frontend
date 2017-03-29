import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { QueryType } from './query-type.interface';
import handleError from '../shared/handle-error';
import { Observable } from 'rxjs/Rx'; 

@Injectable()
export class QueryTypeService {
  private queryTypeUrl = "/WS/Lookup/QueryTypes";
  private queryTypes: Observable<QueryType[]>;

  constructor(private http: Http) { }

  getAllQueryTypes(): Observable<QueryType[]> {
    if(!this.queryTypes) {
      this.queryTypes = this.http.get(this.queryTypeUrl)
        .map((response: Response) => 
          response.json()['QueryTypeDTOs'] as QueryType[])
        .publishReplay(1)
        .refCount()
        .catch(handleError);
    }
    return this.queryTypes;
  }
}