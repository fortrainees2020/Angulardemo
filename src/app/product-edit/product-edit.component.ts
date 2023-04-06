import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {
  productForm: Product = {
    id: 0,
    pname: '',
    price: 0
  };
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private productService: ProductService
  ) {}
 
  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => { //editt:101 = @Path Varaible
      var id = Number(param.get('id')); // Read the product id from route 
      this.getById(id);
      
      //this.router.navigate(["/Productssss"]);
    });
  }
 
  getById(id: number) {
    this.productService.getById(id).subscribe((data) => {
     console.log(data);
      this.productForm = data;
    });
  }
 
  update() {
    this.productService.update(this.productForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/Products"]);
      },
      error:(err) => {
        console.log(err);
      }
    })
  }

}
