import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.css']
})

export class ReplaySubjectComponent implements OnInit{

  //List Data

  user1List = [
    'Angular 1',
    'Angular 2'
  ];

  intSubscription!:Subscription

  user2List:any = [];

  methodInterval:boolean=false;

  user3List:any = [];

  //SubscribeModes
  subscribeMode2:boolean = false;
  subscribeMode3:boolean = false;


  //Subscriptions
  subscription2!:Subscription;
  subscription3!:Subscription;

  constructor(private _du:DesignUtilityService){}


  addVideo(video:any){
    this._du.videoEmit.next(video.value)
  }

  ngOnInit(): void {
    this._du.videoEmit.subscribe((res)=>{
      console.log(res);
      this.user1List.push(res);
    })   
  }

  user2Subscribe(){
    if(this.subscribeMode2){
      this.subscription2.unsubscribe();
    }else{
      this.subscription2 = this._du.videoEmit.subscribe((res)=>{
        this.user2List.push(res);
      })
    } 
    this.subscribeMode2 = !this.subscribeMode2;
  }

  user3Subscribe(){
    if(this.subscribeMode3){
      this.subscription3.unsubscribe();
    }else{
      this.subscription3 = this._du.videoEmit.subscribe((res:any)=>{
        this.user3List.push(res);
      })
    }
    this.subscribeMode3 = !this.subscribeMode3;
  }

  toggleBtn(){

    const broadCastVideo = interval(1000);

    if(!this.methodInterval){
      this.intSubscription = broadCastVideo.subscribe((res)=>{
        this._du.videoEmit.next('Video ' + res);
      })
    }else{
      this.intSubscription.unsubscribe();
    }

    this.methodInterval= !this.methodInterval
  }

}
