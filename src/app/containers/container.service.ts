import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Container } from './container.interface';
import handleError from '../shared/handle-error';
import { Observable } from 'rxjs/Rx'; 

@Injectable()
export class ContainerService { 
  private containersUrl = "/WS/Container/Containers";
  private containerUrl = "/WS/Container/Container";
  private containerAndMethodsUrl = "/WS/Container/CreateUpdateMethods";
  private containerWithMethodsUrl = "/WS/Container/ContainerWithMethods";
  containers: Container[];

  constructor(private http: Http) { }

  getAllContainers(): Observable<Container[]>  { 
    return this.http.get(this.containersUrl)
      // Observable<Container[]>
      .map((response: Response) => {
        return response.json()['ContainerDTOs'] as Container[];
      }) 
      .catch(handleError);
  }

  getContainer(id: number): Observable<Container> {
    const url = `${this.containerUrl}/${id}`;
    return this.http.get(url)
      .map((response:Response) => {
        //response.json().map(this.toContainer);
        return response.json()['ContainerDTO'] as Container;
      })
      .catch(handleError);
  }

  saveContainer(container: Container): Observable<Response> {
    const url = `${this.containerUrl}`;
    const containerDTO = { ContainerDTO: container };
    return this.http.post(url, JSON.stringify(containerDTO), { headers: this.getHeaders() })
      .map(response => response.json() || {})
      .catch(handleError);
  }

  updateContainer(container: Container): Observable<Response> {
    console.log("Update container: ", JSON.stringify(container));
    const url = `${this.containerUrl}`;
    const containerDTO = { ContainerDTO: container };
    return this.http.put(url, JSON.stringify(containerDTO), { headers: this.getHeaders() })
      .map(response => response.json())
      .catch(handleError);
  }

  deleteContainer(id: string): Observable<Response> {
    const url = `${this.containerUrl}/${id}`;
    return this.http.delete(url)
      .map(response => response.json())
      .catch(handleError);
  }

  saveContainerAndMethods(container: Container): Observable<Response> {
    const url = `${this.containerAndMethodsUrl}`;
    const containerDTO = { ContainerDTO: container };
    return this.http.post(url, JSON.stringify(containerDTO), { headers: this.getHeaders() })
      .map(response => response.json() || {})
      .catch(handleError);
  }

  saveContainerWithMethods(container: Container): Observable<Response> {
    const url = `${this.containerWithMethodsUrl}`;
    const containerDTO = { ContainerDTO: container };
    return this.http.post(url, JSON.stringify(containerDTO), { headers: this.getHeaders() })
      .map(response => response.json())
      .catch(handleError)
  }
  
  // PRIVATE METHODS

  private getHeaders(){
    let headers = new Headers();
    //headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    return headers;
  }
}
