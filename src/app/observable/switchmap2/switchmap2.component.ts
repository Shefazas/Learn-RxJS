import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { concatMap, debounceTime, distinctUntilChanged, filter, map, pluck, switchMap } from 'rxjs';
import { Search } from 'src/app/appInterfaces/search.interface';
import { SearchService } from 'src/app/appServices/search.service';

@Component({
  selector: 'app-switchmap2',
  templateUrl: './switchmap2.component.html',
  styleUrls: ['./switchmap2.component.css']
})

export class Switchmap2Component implements OnInit,AfterViewInit{

  @ViewChild('searchForm') searchForm!:NgForm;

  searchResults:any;
  

  searchResultCount:any;

  constructor(private _searchService:SearchService){}

  ngAfterViewInit(): void {

    // this._searchService.getSearches('angular').subscribe((res)=>{
    //   console.log(res); 
    // })

    const formValue = this.searchForm.valueChanges;

    formValue?.pipe(
      // map(res => res.searchTerm)
      filter(value => !!value),
      filter(() => this.searchForm.valid!),
      pluck('searchTerm'),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(res=>this._searchService.getSearches(res))
      ).subscribe((res)=>{
      console.log(res);   
      this.searchResults = res;
      this.searchResultCount = Object.keys(res).length;
    })
  }

  ngOnInit(): void {
    
  }
}
