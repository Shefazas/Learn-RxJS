import { Component, ElementRef, ViewChild } from '@angular/core';
import { combineLatest, take , forkJoin, fromEvent, map, withLatestFrom, zip } from 'rxjs';

@Component({
  selector: 'app-zip-forkjoin',
  templateUrl: './zip-forkjoin.component.html',
  styleUrls: ['./zip-forkjoin.component.css']
})
export class ZipForkjoinComponent {

//Source
nameSource = ['Anup','Shekhar','Sharma','Uxtrendz'];

colorSource = ['red','blue','green','orange','yellow','purple'];

//Template Reference
@ViewChild('name') name!:ElementRef;
@ViewChild('color') color!:ElementRef;

ngAfterViewInit(): void {

  // Observable
  const nameObs = fromEvent<any>(this.name.nativeElement,'change').pipe(map((event)=>
    event.target.value),take(4))

   const colorObs = fromEvent<any>(this.color.nativeElement,'change').pipe(map((event)=>
    event.target.value
  ),take(3))

  //zip

  zip(nameObs,colorObs).subscribe(([name,color])=>{
    //console.log(name,color);   
    this.createBox(name,color,'elContainer') 
  })

  //forkjoin

  forkJoin(nameObs,colorObs).subscribe(([name,color])=>{
    //console.log(name,color);   
    this.createBox(name,color,'elContainer2') 
  })
}


createBox(name:any,color:any,containerId:any){
  let el = document.createElement('div');
  el.innerText = name;
  el.style.backgroundColor = color;
  document.getElementById(containerId)?.appendChild(el);
}

}
