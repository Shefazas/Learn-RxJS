import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  handleError(err:HttpErrorResponse){
    console.log(err);
    let errMsg = '';
    if(!err.error || !err.error.error){
      console.log('Network Error');
      errMsg = "Unknown Error"
      
    }else{
      if(err.error.error == 'Permission denied'){
        errMsg = 'You dont have permission to access this code'
      }
    }
    return throwError(errMsg)
  }
}
