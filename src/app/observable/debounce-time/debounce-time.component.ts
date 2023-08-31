import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.css']
})
export class DebounceTimeComponent implements OnInit,AfterViewInit{

  reqData=null;

  @ViewChild('myInput') myInput! : ElementRef;

  @ViewChild('myInput2') myInput2! : ElementRef;
  reqData2 = null;

  constructor(private loadingBar: LoadingBarService){}

  ngOnInit(): void {   
  }

  ngAfterViewInit(): void {

  //Ex - 01 DebounceTime

  const searchTerm = fromEvent(this.myInput.nativeElement,'keyup').pipe(
    map((event:any)=>event.target.value),
    debounceTime(1000)
  );

   searchTerm.subscribe((res)=>{
    console.log(res);
    this.reqData = res;
    this.loadingBar.start();

    setTimeout(() => {
      this.reqData = null;
      this.loadingBar.stop();
    }, 2000);
    
   })

   //Ex - 02 DistinctUntilChanged

  const searchTerm2 = fromEvent(this.myInput2.nativeElement,'keyup').pipe(
    map((event:any)=>event.target.value),
    debounceTime(1000),
    distinctUntilChanged()
  );

  searchTerm2.subscribe((res)=>{
    console.log(res);
    this.reqData2 = res;
    this.loadingBar.start();

    setTimeout(() => {
      this.reqData2 = null;
      this.loadingBar.stop();
    }, 2000);
    
   })
  }

}
