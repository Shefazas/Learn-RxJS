import { Component, OnInit } from '@angular/core';
import { concat, interval, map, merge, take } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.css']
})
export class MergeComponent implements OnInit{

  constructor(private _du:DesignUtilityService){}

  ngOnInit(): void {

    const sourceTech = interval(3000).pipe(map(res=>'Tech Video # '+ (res + 1)),take(5));
    const sourceComedy = interval(6000).pipe(map(res=>'Comedy Video # '+ (res + 1)),take(3));
    const sourceNews = interval(3500).pipe(map(res=>'Source Video # '+ (res + 1)),take(4));

    const FinalObs = merge(sourceTech,sourceComedy,sourceNews);

    FinalObs.subscribe(res=>{
      console.log(res);
      this._du.print(res,'elContainer')  
    })
  }
}
