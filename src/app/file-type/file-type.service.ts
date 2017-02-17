
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { FileType } from './file-type.interface';
import handleError from '../shared/handle-error';
import { Observable } from 'rxjs/Rx'; 

@Injectable()
export class FileTypeService {
  private fileTypeUrl = "/Lookup/FileTypes";

  constructor(private http: Http) { }

  getAllFileTypes(): Observable<FileType[]> {
    return this.http.get(this.fileTypeUrl)
      .map((response: Response) => 
        response.json()['FileTypeDTOs'] as FileType[])
      .catch(handleError);
  }
}
