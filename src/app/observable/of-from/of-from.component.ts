import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css']
})

export class OfFromComponent implements OnInit {

  obsMsg:any;

  constructor(private _designUtility:DesignUtilityService){}


  ngOnInit(): void {

    //Of

    const Obs1 = of('Anup','Shekhar','Sharma');

    Obs1.subscribe(res=>{
      //console.log(res);
      this._designUtility.print(res,'elContainer')  
    })
  

  const Obs2 = of({ a:'Anup',b:'Shekhar',c:'Sharma' });

    Obs2.subscribe(res=>{
      this.obsMsg = res;
      //console.log('obsMsg',res);
      //this._designUtility.print(res,'elContainer')  
    })

    //FROM - Array

    const Obs3 = from(['Uxtrendz','John','Alex']);

    Obs3.subscribe(res=>{
      //console.log(res);
      this._designUtility.print(res,'elContainer3')  
    })

    //FROM - Promise

    const promise = new Promise(resolve =>{
      setTimeout(() => {
        resolve('Promise Resolved')
      }, 3000);
    })

    const Obs4 = from(promise);

    Obs4.subscribe(res=>{
      console.log(res);
      this._designUtility.print(res,'elContainer4')  
    })

    // promise.then((res)=>{
    //   console.log(res);
      
    // })

    //FROM - String

    const Obs5 = from('Welcome to Uxtrendz');

    Obs5.subscribe(res=>{
      console.log(res);
      this._designUtility.print(res,'elContainer5')  
    })
  }

}
