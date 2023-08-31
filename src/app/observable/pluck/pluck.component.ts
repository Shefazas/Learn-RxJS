import { Component, OnInit } from '@angular/core';
import { from, map, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.css']
})

export class PluckComponent implements OnInit {

  data:any;
  data2: any;

  constructor(){}


  users = [
    {
      name:'Anna',
      skills:'Angular',
      job:{
        title:'Frontend Developer',
        exp:'10 Years'
      }
    },
    {
      name:'John',
      skills:'Python',
      job:{
        title:'Html Developer',
        exp:'10 Years'
      }
    },
    {
      name:'Ria',
      skills:'JavaScript',
      job:{
        title:'Ui Developer',
        exp:'10 Years'
      }
    },
    {
      name:'Mia',
      skills:'HTML',
      job:{
        title:'JavaScript Developer',
        exp:'10 Years'
      }
    }
  ]

  ngOnInit(): void {

    //Ex - 01
    from(this.users).pipe(    
      // map(data=>data.name) or 
      pluck('name')
      ,toArray()).subscribe((res)=>{
      console.log(res);
      this.data = res;    
    })

     //Ex - 02
     from(this.users).pipe(    
      // map(data=>data.name) or 
      pluck('job','title')
      ,toArray()).subscribe((res)=>{
      console.log(res);
      this.data2 = res;    
    })
  }

}
