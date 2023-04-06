import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Product } from './model/product';
import { ProductService } from './product.service';

import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'

describe('ProductService', () => {
let service: ProductService;
let mockHttpClient: any;

//----------1. One Way---Create Service instance
/*beforeEach(() => {
  service = new ProductService (mockHttpClient);
}); */
//-------2---Second Way-----Inject Service ----------------
beforeEach(() => {
  TestBed.configureTestingModule({
    //imports: [HttpClientModule],
    imports: [HttpClientTestingModule],
    providers: [ProductService]
  });
  //------3. Instantiates HttpClient and service
  //mockHttpClient =TestBed.inject(HttpClientModule);
  mockHttpClient =TestBed.inject(HttpClientTestingModule)
  service = TestBed.inject(ProductService);
});

//-----------4.  //Test case for GET------------
it('should return product data', () => {
  let mockResponse = [
    {"id":1, "pname":"Mobile", "price": 100.40},
    {"id":2, "pname":"Laptop", "price":  200.20},
    {"id":3, "pname":"Charger", "price": 300.20}
  ];

  let response:any;
  spyOn(service,'getAllProducts').and.returnValue(of(mockResponse));
  service.getAllProducts().subscribe(res=> { response=res });
  expect(response).toEqual(mockResponse);
});
//-----------------------------------------------


//----------5. Test case for POST----------
it('should add an Product and return it', () => {
  const newProduct: Product =  {"id":4, "pname":"iPhone 14", "price": 600.40};
  service.createProduct(newProduct).subscribe({
    next: data => expect(data).toEqual(newProduct),
    error: fail
  });
})
//----------Testing Synchronous Call
it("Should call sayHello", () => {
  let name = "Bob"
  let greeting = service.sayHello(name)
    expect(greeting).toBe(`Hello ${name}`)
  })

//----------Use HttpClientTestingController
it("Should get a product", (done) => {
  service.getById(1).subscribe((product) => {
expect(product.pname).toBe("Mobile")
expect(product.price).toBe(100)
done() })

let controller: HttpTestingController =
    TestBed.get(HttpTestingController)
//Get a mock request for the URL
let mockRequest = controller.expectOne("http://localhost:3000/products/1")
//Supply mock data 
mockRequest.flush({
    "id": 1,
    "pname": "Mobile",
    "price": 100
}) })
//--------------
 /* beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });*/
});
