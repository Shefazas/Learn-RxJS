import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit{

  promiseVal:any;

  constructor(){
  }

  dell = {
    brand:'Dell',
    hardDisk:'2 TB',
    color: 'Black'
  }

  hp = {
    brand:'Hp',
    hardDisk:'1 TB',
    color: 'Silver'
  }

  notAvil = {
    brand:'Not Available',
    status:'Failed'
  }

  availableDell(){
    return false
   
  }

  availableHp(){
    return false
  }

  ngOnInit(): void {
    let promiseEg = new Promise((resolve,reject)=>{
      //resolve("Resolved")
      //reject("Rejected")

      if(this.availableDell()){
        return setTimeout(()=>{
          //resolve('Dell is Purchased')
          resolve(this.dell)

        },3000)
        
      }else if(this.availableHp()){
        return setTimeout(()=>{
          // resolve('Hp is Purchased')
          resolve(this.hp)

        },3000)
        
      }else{
        return setTimeout(()=>{
          reject(this.notAvil)
          //reject('Not available')
        },3000)
      
      }
    })

    promiseEg.then((res:any)=>{
      console.log("then code =>",res);  
      this.promiseVal = res;
    }).catch((res)=>{
      console.log("catch code =>", res);
      this.promiseVal = res;
    })
  }

}
