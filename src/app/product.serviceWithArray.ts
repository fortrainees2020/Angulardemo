import { Injectable } from '@angular/core';
import { Product } from './model/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // 2. Create Array
  public products:Product[]=[
    {"id":1, "pname":"Mobile", "price": 100.40},
   {"id":2, "pname":"Laptop", "price": 200.20},
   {"id":3, "pname":"Charger", "price": 300.20},
  ];
  constructor() { }


//3. Define to get books to be called by Product page
  getAllProducts():Product[]{
    return this.products;
 }
}
