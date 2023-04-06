import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product';
import { ProductService } from '../product.service';
declare var window: any;
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

//This is Child Component
export class ProductDetailComponent{
  show:boolean=true;
  totalrecords=0;
  @Input() 
  titleFromParent: string | undefined; // decorate the property with @Input()
 // constructor(){}

  public products:Product[] | undefined;
  todaydate = new Date(); 
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private productService: ProductService //Dependency Injection
  ) {}
  
  ngOnInit() {
    this.productService.getAllProducts().subscribe((res: Product[]) => {
      this.products = res; //INITIALIZATION
      console.log(' List of products:'+this.products);
      this.totalrecords=this.products.length;
      console.log(" Total reocords are"+ this.totalrecords);
  });  
// Only for delete
  this.deleteModal = new window.bootstrap.Modal(
    document.getElementById('deleteModal')
  );
  }//ngOninit()
  getTotalProductsCount():number {
   return this.productService.getAllProducts.length;
}
//--------Only for delete-----------------------------------------
deleteModal: any;
idTodelete: number = 0;
allProducts: Product[] = [];
openDeleteModal(id: number) {
  this.idTodelete = id;
  this.deleteModal.show();
}
delete() {
  console.log(" Delete in progress");
  this.productService.delete(this.idTodelete).subscribe({
    next: (data) => {
      this.allProducts = this.allProducts.filter(_ => _.id != this.idTodelete)
      this.deleteModal.hide();
     // this.router.navigate(["/Products"]);
     this.ngOnInit();
    },
      error:(err) => {
        console.log(err);
      } 
  });  
}//delete

@Output() rickshaw = new EventEmitter<string>();
bag:string="it has clothes"

sendClothes(value:string)
{this.rickshaw.emit(value);}







  //Demostrate the @Output
/*Constructor vs ngOnInit()
Whenever you create an instance of a class, the class constructor is automatically called. 
Like other programming languages, the class constructor in angular is also used to initialize the 
members of the class and it’s sub classes. 
The ngOnInit is a life cycle hook method provided by Angular which is called after the 
constructor and is generally used to perform tasks related to Angular bindings. For example, 
ngOnInit is the right place to call a service method to fetch data from a remote server. We can also do 
the same using a class constructor, but the general rule of thumb is, tasks that are time consuming should use 
ngOnInit instead of the constructor. As fetching data from a remote server is time consuming, the better
 place for calling the service method is ngOnInit. */
    

}
function getTotalRecords() {
  throw new Error('Function not implemented.');
}

