import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataApiRestFulJsonService {

private url ='';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(public httpClient: HttpClient) { }


// Error handling
   handleError(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     //window.alert(errorMessage);
     console.log(errorMessage);
     return throwError(errorMessage);
  }


 public setBaseUrl(url) {
      this.url=url;
  }
 public getBaseUrl():string{
    return this.url;
  }



}
