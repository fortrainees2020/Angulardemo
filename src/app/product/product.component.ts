import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  titleInParent = 'Cognizant Product Applications';
   constructor() { }
   
  mybag:string | undefined
   getBag(event: string | undefined): void
   {
    this.mybag=event;
    console.log("It is from Parent:"+this.mybag);
   }

}
