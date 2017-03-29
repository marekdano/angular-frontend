
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { FileType } from './file-type.interface';
import handleError from '../shared/handle-error';
import { Observable } from 'rxjs/Rx'; 

@Injectable()
export class FileTypeService {
  private fileTypeUrl = "/WS/Lookup/FileTypes";
  private fileTypes: Observable<FileType[]>;

  constructor(private http: Http) { }

  getAllFileTypes(): Observable<FileType[]> {
    if(!this.fileTypes) {
      this.fileTypes = this.http.get(this.fileTypeUrl)
        .map((response: Response) => 
          response.json()['FileTypeDTOs'] as FileType[])
        .publishReplay(1)
        .refCount()
        .catch(handleError);
    }
    return this.fileTypes;
  }
}
