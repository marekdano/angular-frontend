import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { MethodType } from './method-type.interface';
import handleError from '../shared/handle-error';
import { Observable } from 'rxjs/Rx'; 

@Injectable()
export class MethodTypeService {
  private methodTypesUrl = "/WS/Lookup/MethodTypes";
  private methodTypes: Observable<MethodType[]>;

  constructor(private http: Http) { }

  getAllMethodTypes(): Observable<MethodType[]> {
    if(!this.methodTypes) {
      this.methodTypes = this.http.get(this.methodTypesUrl)
        // Observable<Container[]>
        .map((response:Response) => 
          response.json()['MethodTypeDTOs'] as MethodType[])
        .publishReplay(1)
        .refCount()
        .catch(handleError);
    }
    return this.methodTypes;
  }
}
