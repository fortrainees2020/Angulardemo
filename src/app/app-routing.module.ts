import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginReactiveComponent } from './login-reactive/login-reactive.component';
import { LoginComponent } from './login/login.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Products', component: ProductComponent},
  { path: 'New', component: ProductCreateComponent},
  { path: 'Edit/:id', component: ProductEditComponent},
  {path:'', redirectTo:'Products',pathMatch:'full'},
  { path: '**', component: LoginReactiveComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
