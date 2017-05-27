import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import handleError from '../shared/handle-error';
import { Observable } from 'rxjs/Rx'; 

@Injectable()
export class MethodService {
  private containerMethodUrl = "/WS/Container/Method";

  constructor(private http: Http) { }
  
  deleteMethod(id: number): Observable<Response> {
    const url = `${this.containerMethodUrl}/${id}`;
    return this.http.delete(url)
      .map(response => response.json())
      .catch(handleError);
  }
}
