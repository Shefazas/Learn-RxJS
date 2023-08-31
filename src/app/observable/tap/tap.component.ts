import { Component, OnInit } from '@angular/core';
import { interval, map, Subscription, tap } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css']
})

export class TapComponent implements OnInit {

  obsSubscription!:Subscription;
  obsSubscription2!:Subscription;
  myColor! : string;

  constructor(private _designUtility:DesignUtilityService){}

  ngOnInit(): void {

    const source = interval(1500);

    //Ex - 01 
    const Arr = ['Ann','Diya','Ish','Ahaana','Hansika','Alex']
    

    
    this.obsSubscription = source.pipe(
      tap(data=>{ 
        //console.log('tap before',data);   
        if(data == 4){
           this.obsSubscription.unsubscribe();
        }
        }),
      map(data=> Arr[data]),
        tap(data=>
          console.log('tap after',data))
    
    ).subscribe((res:any)=>{
      //console.log(res);
      this._designUtility.print(res,'elContainer');
      
    })

    //Ex - 02 
    const Arr2 = ['Orange','Blue','Red','Green','Violet','Purple']
    

    
    this.obsSubscription2 = source.pipe(
      tap(data=>{ 
        //console.log('tap before',data);
        this.myColor = Arr2[data];
        if(data == 7){
           this.obsSubscription2.unsubscribe();
        }
      }),
      map(data=> Arr2[data]),
       
    ).subscribe((res:any)=>{
      //console.log(res);
      this._designUtility.print(res,'elContainer2');
      
    })
  }

}
