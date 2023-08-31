import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-catch-error',
  templateUrl: './catch-error.component.html',
  styleUrls: ['./catch-error.component.css']
})

export class CatchErrorComponent implements OnInit {

  fetching:boolean=false;
  allProducts:any;
  error:any;
  status:any;

  constructor(private _du:DesignUtilityService){}

  

  onGetProducts(){
    console.log('jjjjjjjjjjj'); 
    this.fetching = true;
    this._du.getProducts().subscribe((res:any)=>{
      this.allProducts = res;
      this.fetching = false;
    },
    (err:any)=>{
      console.log(err);
      //this.status = 'Problem Fetching Data'
      this.fetching = false;
      this.error=err;
      // if(!err.error || !err.error.error){
      //   console.log("Network Error");
      //   this.error = "Unknown Error"
      // }else{
      //   if(err.error.error == 'Permission denied'){
      //     this.error ="No permission"
      //   }
      // }  
    })
  }

  ngOnInit(): void {
    
  }

}
