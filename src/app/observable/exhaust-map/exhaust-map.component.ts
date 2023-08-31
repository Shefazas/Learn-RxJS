import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { exhaustMap, fromEvent, tap } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-exhaust-map',
  templateUrl: './exhaust-map.component.html',
  styleUrls: ['./exhaust-map.component.css']
})
export class ExhaustMapComponent implements OnInit,AfterViewInit {

  @ViewChild('btn') btn!:ElementRef;
  getData: any;

  constructor(private http:HttpClient,private _du:DesignUtilityService){}

  url='https://jsonplaceholder.typicode.com/posts/1'

  url2='https://jsonplaceholder.typicode.com/posts'


  num=0;
  saveRequest:any;
  fetching = false;

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    fromEvent(this.btn.nativeElement,'click').pipe(
      tap(()=>this.fetching = true),
      exhaustMap(()=>this.onSave(this.num++))).subscribe((res)=>{
      console.log(res);

      this.onFetch();
      this.fetching = false;
      
    })
  }

  onSave(changes:any){
   return this.http.put(this.url,{data:changes})
  }

  onFetch(){
    this.http.get<any>('https://jsonplaceholder.typicode.com/posts/1').subscribe((res)=>{
      console.log(res.id);
    
    this.getData = res.id;

      
    });
  }

  // btnClick(){
  //   this.onSave(this.num++).subscribe((res)=>{
  //     console.log(res);
  //   })
  // }

}
