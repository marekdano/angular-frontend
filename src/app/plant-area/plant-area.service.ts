import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { PlantArea } from './plant-area.interface';
import handleError from '../shared/handle-error';
import { Observable } from 'rxjs/Rx'; 

@Injectable()
export class PlantAreaService {
  private plantAreaUrl = "/Lookup/PlantAreas";

  constructor(private http: Http) { }

  getAllPlantAreas(): Observable<PlantArea[]> {
    return this.http.get(this.plantAreaUrl)
      .map((response: Response) => 
        response.json()['PlantAreaDTOs'] as PlantArea[])
      .catch(handleError);
  }
}
