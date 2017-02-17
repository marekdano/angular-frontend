import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx'; 

@Injectable()
export class MethodService {
  
  constructor(private http: Http) { }
  
}
