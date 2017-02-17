import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { QueryType } from './query-type.interface';
import handleError from '../shared/handle-error';
import { Observable } from 'rxjs/Rx'; 

@Injectable()
export class QueryTypeService {
  private queryTypeUrl = "/Lookup/QueryTypes";

  constructor(private http: Http) { }

  getAllQueryTypes(): Observable<QueryType[]> {
    return this.http.get(this.queryTypeUrl)
      .map((response: Response) => 
        response.json()['QueryTypeDTOs'] as QueryType[])
      .catch(handleError);
  }
}