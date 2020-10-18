import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {FormsComponent} from './forms/forms.component';
import { dataForm } from '../assets/dataForm';

@Injectable({
  providedIn: 'root'
})



export class DataService {

  constructor(private http: HttpClient) { }
  dataUrl="https://cs251-outlab-6.herokuapp.com/initial_values/"
  postUrl= "https://cs251-outlab-6.herokuapp.com/add_new_feedback/"
  getData(){
   return this.http.get(this.dataUrl)
       .pipe(
      catchError(this.handleError)
    );
	}
  private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong.
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // Return an observable with a user-facing error message.
  return throwError(
    'Something bad happened; please try again later.');
}

	addData(form: dataForm)
	{
    	const body=JSON.stringify(form);
    	console.log("yes"+body)
		return this.http.post(this.postUrl,body)
		    .pipe(
      			catchError(this.handleError)
    			);
	}




}
