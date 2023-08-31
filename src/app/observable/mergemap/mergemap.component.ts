import { Component, OnInit } from '@angular/core';
import { from, map, mergeAll, mergeMap, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-mergemap',
  templateUrl: './mergemap.component.html',
  styleUrls: ['./mergemap.component.css']
})

export class MergemapComponent implements OnInit {

  constructor(private _du:DesignUtilityService){}

  getData(data:any){
    return of(data + ' Video Uploaded');
  }

  ngOnInit(): void {

    const source = from(['Tech','Comedy','News'])

    //Ex - 01 | Map

    source.pipe(
      map((res:any)=>this.getData(res))).subscribe((res)=> {
      console.log(res)
      this._du.print(res,'elContainer')
      })
    

    //Ex - 02 | Map + MergeAll

    source.pipe(
      map((res:any)=>this.getData(res)),mergeAll()).subscribe((res)=>{
      console.log(res)
      this._du.print(res,'elContainer2')
      })


      //Ex - 02 | MergeMap

    source.pipe(
      mergeMap((res:any)=>this.getData(res))).subscribe((res)=>{
      console.log(res)
      this._du.print(res,'elContainer3')
      })
    
    
    
  }

}
