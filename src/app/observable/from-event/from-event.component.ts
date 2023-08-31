import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})

export class FromEventComponent implements AfterViewInit{

  @ViewChild('addBtn') addBtn!:ElementRef;

  constructor(private _designUtility:DesignUtilityService){}


  // constructor(private renderer: Renderer2, private el: ElementRef) {}

  // print() {
  //   const li = this.renderer.createElement('li');
  //   const text = this.renderer.createText('Uxtrendz');
  //   this.renderer.appendChild(li, text);
  //   this.renderer.appendChild(this.el.nativeElement.querySelector('#elContainer'), li);
  // }

  ngAfterViewInit(): void {
    let count = 1;
    fromEvent(this.addBtn.nativeElement,'click').subscribe((res)=>{
      //console.log("Vedio"+ count++); 
      let countVal = 'Vedio ' + count++;
      this._designUtility.print(countVal,'elContainer');
      this._designUtility.print(countVal,'elContainer1');   
    })
  }

 

  ngOnInit(): void {
    
  }

}
