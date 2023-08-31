import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-async-await',
  templateUrl: './async-await.component.html',
  styleUrls: ['./async-await.component.css']
})
export class AsyncAwaitComponent implements OnInit{

  @ViewChild('result1') result1!:ElementRef;
  @ViewChild('result2') result2!:ElementRef;
  @ViewChild('result3') result3!:ElementRef;

  promise:any;

  constructor(){

  }

  dell = {
    brand: 'Dell',
    hardDisk: '2 TB',
    color: 'Black'
  }

  hp = fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json())

  getPromise(){
   this.promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(this.dell)
    },3000);
  })
  }

  // async getData(){
  //   let response = await this.promise;
  //   console.log(response);
    
  // }

  // ngAfterViewInit() {
  //   this.result1.nativeElement.innerHTML = "Ready to fetch data";
  // }

  fetch1(){   
    this.promise.then((res:any) =>{
      console.log(res);
      this.result1.nativeElement.innerHTML = JSON.stringify(res)
    })  
  }

  async fetch2(){   
    this.result2.nativeElement.innerHTML = "Ready to fetch data";

    let data = await this.promise;
    this.result2.nativeElement.innerHTML = JSON.stringify(data)
    
  }

  fetch3(){
    this.hp.then((res)=>{
      console.log(res);
      this.result3.nativeElement.innerHTML = JSON.stringify(res)})
  }


  ngOnInit(): void {
    
    this.getPromise();
    
    // console.log(this.getData());
  }
}

