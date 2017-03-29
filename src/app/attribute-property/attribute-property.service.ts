import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { AttributeProperty } from './attribute-property.interface';
import handleError from '../shared/handle-error';
import { Observable } from 'rxjs/Rx'; 

@Injectable()
export class AttributePropertyService {
  private attributePropertiesUrl = "/WS/Lookup/AttributeProperties";
  private attributeProperties: Observable<AttributeProperty[]>;

  constructor(private http: Http) { }

  getAllAttributeProperties(): Observable<AttributeProperty[]> {
    if(!this.attributeProperties) {
      this.attributeProperties = this.http.get(this.attributePropertiesUrl)
        .map((response: Response) => 
          response.json()['AttributePropertyDTOs'] as AttributeProperty[])
        .publishReplay(1)
        .refCount()
        .catch(handleError);
    }
    return this.attributeProperties;
  }

}

  

  

  


