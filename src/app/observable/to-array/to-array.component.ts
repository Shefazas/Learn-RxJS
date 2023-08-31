import { Component, OnInit } from '@angular/core';
import { from, interval, of, Subscription, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css']
})
export class ToArrayComponent implements OnInit{

  sourceSub!:Subscription;

  users = [
    {name:'Anna',skill:'Angular'},
    {name:'Manu',skill:'Html'},
    {name:'Sia',skill:'JavaScript'},
    {name:'Tia',skill:'TypeScript'},
  ]
  
  constructor(){
  }

  ngOnInit(): void {

    //Ex - 01
    const source = interval(1000);
    this.sourceSub = source.pipe(take(5),
      toArray()).subscribe((res)=>{
      console.log("1",res);
      // if(res >= 8){
      //   this.sourceSub.unsubscribe();
      // }
    })

    //Ex - 02

    const source2 = from(this.users)

    source2.pipe(toArray()).subscribe(res=>{
      console.log("source2",res);
      
    })
  

  //Ex - 03

  const source3 = of('Geetha','Ashok','Agina','Ajith')

  source3.pipe(toArray()).subscribe(res=>{
    console.log("3",res);
    
  })

  }

}
