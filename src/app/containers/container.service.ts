import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Container } from './container.interface';
import handleError from '../shared/handle-error';
import { Observable } from 'rxjs/Rx'; 

@Injectable()
export class ContainerService {
  //private containersUrl = 'http://crossorigin.me/http://iqsconfig.westeurope.cloudapp.azure.com/api/Containers/'; 
  private containersUrl = "Container/Containers";
  private containerUrl = "Container/Container";
  private containerAndMethodsUrl = "Container/ContainerAndMethods";
  containers: Container[];

  constructor(private http: Http) { }

  getAllContainers(): Observable<Container[]>  { 
    return this.http.get(this.containersUrl)
      // Observable<Container[]>
      .map((response: Response) => {
        return response.json()['ContainerDTOs'] as Container[];
      }) 
      .catch(handleError);

      // Promise approach:
      // Promise<any[]>
      // .toPromise()
      // //.then(response => response.json().data as Container[])
      // .then(response => response.json())
      // .catch(this.handleError);
  }

  getContainer(id: number): Observable<Container> {
    const url = `${this.containerUrl}/${id}`;
    return this.http.get(url)
      .map((response:Response) => {
        //response.json().map(this.toContainer);
        return response.json()['ContainerDTO'] as Container;
      })
      .catch(handleError);
      // Promise approach: 
      // .toPromise()
      // .then(response => <Container[]>response.json())
      // .catch(this.handleError);
  }

  saveContainer(container: Container): Observable<Response> {
    const url = `${this.containerUrl}`;
    return this.http.post(url, JSON.stringify(container), { headers: this.getHeaders() })
      .map(response => response.json() || {})
      .catch(handleError);
  }

  updateContainer(container: Container): Observable<Response> {
    const url = `${this.containersUrl}/${container.ContainerKey}`;
    return this.http.put(url, JSON.stringify(container), { headers: this.getHeaders() })
      .map(response => response.json().data || {})
      .catch(handleError);
  }

  deleteContainer(container: Container): Observable<Response> {
    const url = `${this.containersUrl}/${container.ContainerKey}`;
    return this.http.delete(url)
      .map(response => response.json().data || {})
      .catch(handleError);
  }

  saveContainerAndMethods(container: Container): Observable<Response> {
    const url = `${this.containerAndMethodsUrl}`;
    return this.http.post(url, JSON.stringify(container), { headers: this.getHeaders() })
      .map(response => response.json() || {})
      .catch(handleError);
  }
  
  // PRIVATE METHODS

  private getHeaders(){
    let headers = new Headers();
    //headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    return headers;
  }

  
}
