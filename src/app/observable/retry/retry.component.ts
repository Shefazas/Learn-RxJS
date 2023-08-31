import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, retry, retryWhen, scan } from 'rxjs';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.css']
})

export class RetryComponent implements OnInit {

  fetching:boolean=false;
  person: any;
  status = 'No Data'

  constructor(private http:HttpClient){}

  ngOnInit(): void {
    //this.fetchDetails();
  }

  fetchDetails(){
    this.fetching = true;
    this.status = 'Fetching Data...';
    setTimeout(() => {
      this.http.get('https://jsonplaceholder.typicode.com/posts/1/comments').pipe(
        //retry(4)
        retryWhen(err => err.pipe(delay(3000),
        scan((retryCount:any)=>{
          if(retryCount >= 5){
            throw err
          }else{
            retryCount = retryCount + 1;
            console.log('retryCount =>' + retryCount);
            this.status = 'Retrying Attempt #' + retryCount
            return retryCount
          }
        },0)
        ))
      ).subscribe((res:any)=>{
        console.log(res);
        this.person = res[0]; 
        this.status = 'Data Fetched';
        this.fetching = false;   
      },
      (err)=>{
        console.log(err);
        this.status = 'Problem Fetching Data'
        this.fetching = false;        
      }
      )
    }, 2000);
  }

}
