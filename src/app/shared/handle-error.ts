import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx'; 

export default function(error: Response | any) {
  let errorMsg: string;
  //errorMsg = error.message || `We couldn't retrieve your data now!`;
  if(typeof error === 'object') {
    errorMsg = `${error.status} - ${error.statusText || ''} ${error._body}`;
  } else if(error instanceof Response) {
    const body = error.json() || '';
    const err = body.error || JSON.stringify(body);    
    errorMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  } else {
    errorMsg = error.message ? error.message : error.toString();
  }
  console.error("Error message: ", errorMsg);

  // throw an application level error
  return Observable.throw(errorMsg);
}