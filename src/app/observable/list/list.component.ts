import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private _du:DesignUtilityService){}

  url='https://global-1bb0f.firebaseio.com/exhaustMap.json'

  ngOnInit(): void {
    
  }

}
