import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})

export class CustomComponent implements OnInit,OnDestroy{

  techStatus:any;
  techStatus2:any;
  names:any;
  nameStatus:any;

  subs2!:Subscription;

  constructor(private _designUtility:DesignUtilityService){

  }

  ngOnInit(): void {

    //Ex -01 (Manual)

    const cusObs1 = Observable.create((observer:any) =>{
      setTimeout(() => {
        observer.next('Angular')
      }, 1000);
      setTimeout(() => {
        observer.next('JavaScript')
        
      }, 2000);
      setTimeout(()=>{
        observer.next('TypeScript');
        //observer.error(new Error('Limit Exceed'))
        
      }, 3000)
      setTimeout(()=>{
        observer.next('HTML');
        observer.complete();
       
      }, 4000)
     
    })

    cusObs1.subscribe((res:any)=>{
      //console.log(res);
      this._designUtility.print(res,'elContainer')
      
    },
    (err:any)=>{
      this.techStatus = 'error'
    },
    ()=>{
      this.techStatus = 'completed'
    })

    //subscribe(data,error,complete)


    //Ex - 02 (Custom Interval)
    const Arr2 = ['RON','ASH','SIA','ANNA','TOM','SAM']
    const cusObs2 = Observable.create((observer:any)=>{
      let count = 0;
      setInterval(()=>{
        observer.next(Arr2[count]);
        if(count >= 3){
          observer.error('Error Emit');
        }
        if(count >= 5){
          observer.complete();
        }
        count ++;
      },1000)
    })

    this.subs2 = cusObs2.subscribe((res:any) =>{
      //console.log(res);
      this._designUtility.print(res,'elContainer2')
      
    },
    (err:any)=>{
      this.techStatus2 = 'error'
    },
    ()=>{
      this.techStatus2 = 'completed'
    })

    //Ex - 03 (Random Name)
    const Arr3 = ['Paris','Kashmir','Australia','Switzerland','Netherland','Dubai']
    const cusObs3 = Observable.create((observer:any)=>{
      let count = 0;
      setInterval(()=>{
        observer.next(Arr3[count]);
        if(count >= 3){
          observer.error('Error Emit');
        }
        if(count >= 5){
          observer.complete();
        }
        count ++;
      },1000) 
    })

    cusObs3.subscribe((res:any)=>{
      console.log(res);
      this.names = res;
      
    },
    (err:any)=>{
      this.nameStatus = 'error'
    },
    ()=>{
      this.nameStatus = 'completed'
    })
  }

  ngOnDestroy(): void {
    this.subs2.unsubscribe();
  }

}
