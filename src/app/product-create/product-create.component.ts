import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {
  productForm: Product = {
    id: 0,
    pname: '',
    price: 0
  };









  constructor(private productService:ProductService,
    private router:Router) {}
 
  ngOnInit(): void {}
  
  create(){
    this.productService.createProduct(this.productForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/Products"])
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}
