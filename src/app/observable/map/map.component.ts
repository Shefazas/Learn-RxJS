import { Component, OnInit } from '@angular/core';
import { from, interval, map, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  sub1!:Subscription;

  sub2!:Subscription;

  msg1:any;

  msg2:any;

  constructor(private _designUtility:DesignUtilityService){}

  ngOnInit(): void {

    const broadCastVideo = interval(1000);
    
    //Ex - 01  
    
   this.sub1 = broadCastVideo.pipe(
    map(data => 'Video '+data)
   ).subscribe((res:any)=>{
    this.msg1 = res;
      //console.log(res); 
    })


    setTimeout(() => {
      this.sub1.unsubscribe();    
    }, 10000);


    //Ex - 02 
   this.sub2 = broadCastVideo.pipe(map(data =>data * 3)).
   subscribe((res)=>{
      console.log(res);

      this.msg2 = res;
      
    })

    setTimeout(() => {
      this.sub2.unsubscribe();    
    }, 10000);




    //Ex - 03

    const members = from([
      {id:1,name:'Ash'},
      {id:2,name:'Ann'},
      {id:3,name:'Tej'},
      {id:4,name:'Ton'},
      {id:5,name:'Ron'},
      {id:6,name:'Tia'},
      {id:7,name:'Vav'},
      {id:8,name:'Shef'},
      {id:9,name:'Gee'},
      {id:10,name:'Bob'},
    ])

    members.pipe(map(data=>data.name)).subscribe((res)=>{
      console.log(res);
      this._designUtility.print(res,'elContainer');
    })

    //let memObs = from(members);
  }

}
