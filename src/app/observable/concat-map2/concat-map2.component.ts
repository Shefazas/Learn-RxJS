import { Component, OnInit } from '@angular/core';
import { concatMap, delay, from, mergeMap, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-concat-map2',
  templateUrl: './concat-map2.component.html',
  styleUrls: ['./concat-map2.component.css']
})
export class ConcatMap2Component implements OnInit{

  constructor(private _du:DesignUtilityService){}


  notifyData=[
    {
      name:'Facebook',
      icon:'assets/fb.jpeg',
      time:'4 Seconds Ago',
      img:'https://placeimg.com/50/50/tech/4',
      strong:'Alax Johnson',
      p:'Connected on your #Uxtrendz Post. Awesome post thankx....'
    },
    {
      name:'Twitter',
      icon:'assets/twitter.png',
      time:'4 Seconds Ago',
      img:'https://placeimg.com/50/50/tech/4',
      strong:'Alax Johnson',
      p:'Connected on your #Uxtrendz Post. Awesome post thankx....'
    },
    {
      name:'Instagram',
      icon:'assets/insta.jpeg',
      time:'4 Seconds Ago',
      img:'https://placeimg.com/50/50/tech/4',
      strong:'Alax Johnson',
      p:'Connected on your #Uxtrendz Post. Awesome post thankx....'
    },
    {
      name:'Youtube',
      icon:'assets/youtube.png',
      time:'4 Seconds Ago',
      img:'https://placeimg.com/50/50/tech/4',
      strong:'Alax Johnson',
      p:'Connected on your #Uxtrendz Post. Awesome post thankx....'
    }

  ]

  getHtml(data:any){
    return of(`<div class="header">
    <div class="app">
        <img src="${data.icon}" width="20" alt="">${data.name}
    </div>
    <div class="time">${data.time}</div>
  </div>
  <div class="body">
      <img src="" alt="" width="30" class="item-img">
      <strong>${data.strong}</strong>
      <p>${data.p}</p>
  </div>`).pipe(delay(2000))

  }

  ngOnInit(): void {

    from(this.notifyData).pipe(concatMap((res:any)=>
      this.getHtml(res)
    )).subscribe((res)=>{
      console.log(res);
      this._du.print2(res,'elContainer')  
    });

    // this._du.print2('ff','elContainer')
    // this._du.print2('yy','elContainer')
    
  }
}
