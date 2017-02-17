import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { AttributeProperty } from './attribute-property.interface';
import handleError from '../shared/handle-error';
import { Observable } from 'rxjs/Rx'; 

@Injectable()
export class AttributePropertyService {
  private attributePropertiesUrl = "/Lookup/AttributeProperties";

  constructor(private http: Http) { }

  getAllAttributeProperties(): Observable<AttributeProperty[]> {
    return this.http.get(this.attributePropertiesUrl)
      .map((response: Response) => 
        response.json()['AttributePropertyDTOs'] as AttributeProperty[])
      .catch(handleError);
  }

}

  

  

  


