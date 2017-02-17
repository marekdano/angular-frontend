import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { MethodType } from './method-type.interface';
import handleError from '../shared/handle-error';
import { Observable } from 'rxjs/Rx'; 

@Injectable()
export class MethodTypeService {
  private methodTypesUrl = "/Lookup/MethodTypes";

  constructor(private http: Http) { }

  getAllMethodTypes(): Observable<MethodType[]> {
    return this.http.get(this.methodTypesUrl)
      // Observable<Container[]>
      .map((response:Response) => 
        response.json()['MethodTypeDTOs'] as MethodType[])
      .catch(handleError);
  }
}
