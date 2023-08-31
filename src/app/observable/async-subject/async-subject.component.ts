import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.css']
})
export class AsyncSubjectComponent implements OnInit{

asycVideoEmit:any;

constructor(private _du:DesignUtilityService){}


addVideo(video:any){
  this._du.asyncVideoEmit.next(video.value);
  console.log(video.value);
  
}

ngOnInit(): void {
    this._du.asyncVideoEmit.subscribe((res)=>{
      this.asycVideoEmit = res;
      
    })
}


onCompletion(){
  this._du.asyncVideoEmit.complete();
}

}