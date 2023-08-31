import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, map, take, takeLast, takeUntil, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css']
})

export class TakeComponent implements OnInit{

  constructor(private _designUtility:DesignUtilityService){}

  randomNames = ['Anna', 'Ash', 'Nila', 'Tia' , 'John', 'Ron', 'Sia']

  ngOnInit(): void {

    const nameSource = from(this.randomNames)
    
    //Ex - 01
    // const source = interval(1000).pipe(take(5))

    nameSource.pipe(take(5)).subscribe((res)=>{
      console.log(res);
      this._designUtility.print(res,'elContainer')
    })

    //Ex - 02

    nameSource.pipe(takeLast(3)).subscribe((res)=>{
      //console.log(res);
      this._designUtility.print(res,'elContainer2')
    })



    //Ex - 03
    const source = interval(1000);

    let condition1 = timer(5000);
    let condition2 = fromEvent(document,'click')  //click

    source.pipe(
      map(res=>'Number ' + res),
      takeUntil(condition2)
    ).subscribe((res)=>{
      console.log(res);
      this._designUtility.print(res,'elContainer3')
    })
  }

}
