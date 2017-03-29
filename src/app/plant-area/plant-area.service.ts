import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { PlantArea } from './plant-area.interface';
import handleError from '../shared/handle-error';
import { Observable } from 'rxjs/Rx'; 

@Injectable()
export class PlantAreaService {
  private plantAreaUrl = "/WS/Lookup/PlantAreas";
  private plantAreas: Observable<PlantArea[]>;

  constructor(private http: Http) { }

  getAllPlantAreas(): Observable<PlantArea[]> {
    if(!this.plantAreas) {
      this.plantAreas = this.http.get(this.plantAreaUrl)
        .map((response: Response) => 
          response.json()['PlantAreaDTOs'] as PlantArea[])
        .catch(handleError);
    }
    return this.plantAreas;
  }
}
