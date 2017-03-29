import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { ContainerType } from './container-type.interface';
import handleError from '../shared/handle-error';
import { Observable } from 'rxjs/Rx'; 

@Injectable()
export class ContainerTypeService {
  private containerTypeUrl = "/WS/Lookup/ContainerTypes";
  private containerTypes: Observable<ContainerType[]>;

  constructor(private http: Http) { }

  getAllContainerTypes(): Observable<ContainerType[]> {
    if(!this.containerTypes) {
      this.containerTypes = this.http.get(this.containerTypeUrl)
        .map((response: Response) => 
          response.json()["ContainerTypeDTOs"] as ContainerType[])
        .catch(handleError);
    }
    return this.containerTypes;
  }
}
