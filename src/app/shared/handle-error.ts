import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx'; 

export default function(error: Response | any) {
  let errorMsg: string;
  //errorMsg = error.message || `We couldn't retrieve your data now!`;
  if(typeof error === 'object') {
    // Uncomment the code if you want to display the error body in the message
    //errorMsg = `${error.status} - ${error.statusText || ''} ${error._body}`;
    errorMsg = `${error.status} - ${error.statusText || ''}`;
    console.error("Full error message: ", `${error.status} - ${error.statusText || ''} ${error._body}`);
  } else if(error instanceof Response) {
    const body = error.json() || '';
    const err = body.error || JSON.stringify(body);    
    // Uncomment the code if you want to display the error body in the message
    //errorMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    errorMsg = `${error.status} - ${error.statusText || ''}`;
    console.error("Full error message: ", `${error.status} - ${error.statusText || ''} ${err}`);
  } else {
    errorMsg = error.message ? error.message : error.toString();
    console.error("Full error message: ", errorMsg);
  }

  // throw an application level error
  return Observable.throw(errorMsg);
}