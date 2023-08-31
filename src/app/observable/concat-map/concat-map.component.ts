import { Component, OnInit } from '@angular/core';
import { concatAll, concatMap, delay, from, map, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.css']
})
export class ConcatMapComponent implements OnInit{


  constructor(private _du:DesignUtilityService){}

  getData(data:any){
    return of(data + 'Video Uploaded').pipe(delay(2000))
  }

  ngOnInit(): void {

    const source = from(['Tech','Comedy','News'])

    //Ex-01 | Map

    source.pipe(
      map(res=>this.getData(res))
    ).subscribe((res)=>{
      console.log(res);
      this._du.print(res,'elContainer')
      
    })

    //Ex-02 | ConcatAll

    source.pipe(
      map(res=>this.getData(res)),concatAll()
    ).subscribe((res)=>{
      console.log(res);
      this._du.print(res,'elContainer2')
      
    })

     //Ex-02 | ConcatMap

     source.pipe(
      concatMap(res=>this.getData(res))
    ).subscribe((res)=>{
      console.log(res);
      this._du.print(res,'elContainer3')
      
    })
    
  }

}
