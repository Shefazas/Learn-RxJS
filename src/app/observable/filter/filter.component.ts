import { Component, OnInit } from '@angular/core';
import { filter, from, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})

export class FilterComponent implements OnInit{

  dataArr = [
    {id:1,name:'Ayan',Gender:'Male'},
    {id:2,name:'Sia',Gender:'Female'},
    {id:3,name:'Tia',Gender:'Female'},
    {id:4,name:'Mia',Gender:'Male'},
    {id:5,name:'Ozy',Gender:'Female'},
    {id:6,name:'Ishh',Gender:'Female'},
    {id:7,name:'Han',Gender:'Male'},
  ]

  data:any;
  data2:any;
  data3:any;

  constructor(){}

  ngOnInit(): void {

    const source = from(this.dataArr);


    //Ex - 01 Filter by length

    source.pipe(
      filter(member => member.name.length > 3),
      toArray()).subscribe((res)=>{
      console.log(res);
      this.data = res;
    })

    //Ex - 02 Filter by gender

    source.pipe(
      filter(member => member.Gender == 'Female'),
      toArray()).subscribe((res)=>{
      console.log(res);
      this.data2 = res;      
    })

     //Ex - 03 Filter by nth item

     source.pipe(
      filter(member => member.id <= 3),
      toArray()).subscribe((res)=>{
      console.log(res);
      this.data3 = res;     
    })  
  }

}
