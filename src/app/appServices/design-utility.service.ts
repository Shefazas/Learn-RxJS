import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, catchError, Observable, ReplaySubject, Subject } from 'rxjs';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})

export class DesignUtilityService {

  exclusive = new Subject<boolean>();

  userName = new BehaviorSubject<any>(2);

  videoEmit = new ReplaySubject<string>(3,5000);

  asyncVideoEmit = new AsyncSubject();

  url='https://test-products-b05fe.firebaseio.com'

  constructor(private http:HttpClient,private errorService:ErrorService) { }

  print(val:any,containerId:any){
    let el = document.createElement('li');
    el.innerText = val;
    document.getElementById(containerId)?.appendChild(el)
  }

  print2(val:any,containerId:any){
    let el = document.createElement('div');
    el.setAttribute('class','item');
    el.innerHTML = val;
    document.getElementById(containerId)?.prepend(el)
  }

  getProducts():Observable<any>{
    return this.http.get<any>(this.url).pipe(catchError(this.errorService.handleError))
  }

  
}
