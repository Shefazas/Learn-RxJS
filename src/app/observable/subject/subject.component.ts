import { Component, OnDestroy, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})

export class SubjectComponent implements OnInit,OnDestroy{
  
  userName: any;

  


  constructor(private _du:DesignUtilityService){
    this._du.userName.subscribe((res)=>{
    console.log(res);
    this.userName = res;
    })
  }

  ngOnInit(): void {
    this._du.exclusive.next(true);  
  }

  ngOnDestroy(): void {
    this._du.exclusive.next(false);
  }

}
