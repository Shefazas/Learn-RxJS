import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';

@Component({
  selector: 'app-share-replay',
  templateUrl: './share-replay.component.html',
  styleUrls: ['./share-replay.component.css']
})
export class ShareReplayComponent implements OnInit{


  url='https://jsonplaceholder.typicode.com/posts';

  allData!: Observable<any>;
  data2!:Observable<any>;


  constructor(private http:HttpClient){}

  ngOnInit(): void {

    this.allData = this.http.get(this.url).pipe(shareReplay()); 

    this.data2 = this.allData.pipe(
      map(res=>res.filter((mobileData:any) =>{
        return mobileData['id'] == 1
      }))
    )
  }

}
