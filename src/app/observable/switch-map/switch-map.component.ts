import { Component } from '@angular/core';
import { delay, from, map, of, switchAll, switchMap } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css']
})

export class SwitchMapComponent {

  constructor(private _du:DesignUtilityService){}

  
  getData(data:any){
    return of(data + ' Video Uploaded').pipe(delay(1000))
  }

  ngOnInit(): void {

    const source = from(['Tech','Comedy','News'])

    //Ex - 01 | Map

    source.pipe(
      map((res:any)=>this.getData(res))).subscribe((res)=> {
      console.log(res)
      this._du.print(res,'elContainer')
    })
    

    //Ex - 02 | Map + SwitchAll

    source.pipe(
      map((res:any)=>this.getData(res)),switchAll()).subscribe((res)=>{
      console.log(res)
      this._du.print(res,'elContainer2')
      })


      //Ex - 02 | SwitchMap

    source.pipe(
      switchMap((res:any)=>this.getData(res))).subscribe((res)=>{
      console.log(res)
      this._du.print(res,'elContainer3')
      })
    
    
    
  }

}