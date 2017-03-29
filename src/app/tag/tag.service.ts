import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Tag } from '../attributes/attribute.interface';
import handleError from '../shared/handle-error';
import { Observable } from 'rxjs/Rx'; 

@Injectable()
export class TagService {
  private tagUrl = '/WS/Lookup/Tags';
  private tags: Observable<Tag[]>;
  
  constructor(private http: Http) { }

  getAllTags(): Observable<Tag[]> {
    if(!this.tags) {
      this.tags = this.http.get(this.tagUrl)
        .map((response: Response) => 
          response.json()["TagDTOs"] as Tag[])
        .catch(handleError);
    }
    return this.tags;
  }
}
