import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { ContainerType } from './container-type.interface';
import handleError from '../shared/handle-error';
import { Observable } from 'rxjs/Rx'; 

@Injectable()
export class ContainerTypeService {
  private containerTypeUrl = "/Lookup/ContainerTypes";

  constructor(private http: Http) { }

  getAllContainerTypes(): Observable<ContainerType[]> {
    return this.http.get(this.containerTypeUrl)
      .map((response: Response) => 
        response.json()["ContainerTypeDTOs"] as ContainerType[])
      .catch(handleError);
  }
}
