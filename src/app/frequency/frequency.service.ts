import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Frequency } from './frequency.interface';
import handleError from '../shared/handle-error';
import { Observable } from 'rxjs/Rx'; 

@Injectable()
export class FrequencyService {
  private frequencyUrl = '/WS/Lookup/Frequencies';
  private frequencies: Observable<Frequency[]>;
  
  constructor(private http: Http) { }

  getAllFrequencies(): Observable<Frequency[]> {
    if(!this.frequencies) {
      this.frequencies = this.http.get(this.frequencyUrl)
        .map((response: Response) => 
          response.json()["FrequencyDTOs"] as Frequency[])
        .publishReplay(1)
        .refCount()
        .catch(handleError);
    }
    return this.frequencies;
  }
}
