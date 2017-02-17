import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Frequency } from './frequency.interface';
import handleError from '../shared/handle-error';
import { Observable } from 'rxjs/Rx'; 

@Injectable()
export class FrequencyService {
  private frequencyUrl = '/Lookup/Frequencies';
  
  constructor(private http: Http) { }

  getAllFrequencies(): Observable<Frequency[]> {
    return this.http.get(this.frequencyUrl)
      .map((response: Response) => 
        response.json()["FrequencyDTOs"] as Frequency[])
      .catch(handleError);
  }
}
