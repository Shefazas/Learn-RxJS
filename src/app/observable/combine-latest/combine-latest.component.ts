import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { combineLatest, fromEvent, map, withLatestFrom } from 'rxjs';


@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.css']
})

export class CombineLatestComponent implements AfterViewInit {

  //Source
  nameSource = ['Anup','Shekhar','Sharma','Uxtrendz'];

  colorSource = ['red','blue','green','orange','yellow','purple'];

  //Template Reference
  @ViewChild('name') name!:ElementRef;
  @ViewChild('color') color!:ElementRef;

  ngAfterViewInit(): void {

    // Observable
    const nameObs = fromEvent(this.name.nativeElement,'change').pipe(map((event:any)=>
      event.target.value
    ))

     const colorObs = fromEvent(this.color.nativeElement,'change').pipe(map((event:any)=>
      event.target.value
    ))

    //CombineLatest

    combineLatest(nameObs,colorObs).subscribe(([name,color])=>{
      //console.log(name,color);   
      this.createBox(name,color,'elContainer') 
    })

    //withLatestFrom

    nameObs.pipe(withLatestFrom(colorObs)).subscribe(([name,color])=>{
      console.log(name,color);   
      this.createBox(name,color,'elContainer2') 
    })
  }


  createBox(name: any, color: any, containerId: any) {
    let el = document.createElement('div');
    el.innerText = name;
    el.style.backgroundColor = color;
    document.getElementById(containerId)?.appendChild(el);
  }
  
}
