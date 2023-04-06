import { Injectable } from '@angular/core';
import { Product } from './model/product';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

//https://dev.to/queencykoh/setting-up-fake-rest-api-with-json-server-in-angular-2na2
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // 2. Create Array
 /* public products:Product[]=[
    {"id":1, "pname":"Mobile", "price": 100.40},
   {"id":2, "pname":"Laptop", "price": 200.20},
   {"id":3, "pname":"Charger", "price": 300.20},
  ];
  constructor() {
   }

//3. Define to get books to be called by BookList page
  getAllProducts():Product[]{
    return this.products;
  }
*/
//-------------Using Rest API---------
constructor(private http: HttpClient) { }
public getAllProducts(): Observable<Product[]> {
  //return this.http.get<Product[]>(`http://localhost:3000/products`);
  return this.http.get<Product[]>(`http://localhost:9090/products`);
}

 createProduct(data:any)
  {
    //return this.http.post<any>(" http://localhost:3000/products",data)
    return this.http.post<any>(" http://localhost:9090/products",data)
    .pipe(map((res:any)=>{
      console.log(res);
      return res;
    }));
  }
  //------------------Update-------
  getById(id: number) {
    //return this.http.get<Product>(`http://localhost:3000/products/${id}`);
    console.log('');
    return this.http.get<Product>(`http://localhost:9090/products/db/${id}`);
   }
    
   update(payload:Product){
    //return this.http.put(`http://localhost:3000/products/${payload.id}`,payload);
    return this.http.put(`http://localhost:9090/products/${payload.id}`,payload);
   }

   delete(id:number){
    //return this.http.delete<Product>(`http://localhost:3000/products/${id}`);
   return this.http.delete<Product>(`http://localhost:9090/products/${id}`);
 }
  /*
  updateEmployee(data:any,id:number)  
  {
    return this.http.put<any>(" http://localhost:3000/posts/"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }));
  }

    deleteEmployee(id:number)  
    {
      return this.http.delete<any>(" http://localhost:3000/posts/"+id)
      .pipe(map((res:any)=>{
        return res;
      }));
    }
delete(id:number){
   return this.http.delete<Fruits>(`http://localhost:3000/fruits/${id}`);
}
*/

sayHello(name:string) : string {
  return `Hello ${name}`
}
}
