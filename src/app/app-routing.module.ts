import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DasboardComponent } from './component/dasboard/dasboard.component';
import { GetAllBooksComponent } from './component/get-all-books/get-all-books.component';
import { GetcartComponent } from './component/getcart/getcart.component';
import { LoginBookStoreComponent } from './component/login-book-store/login-book-store.component';
import { OrderSuccessfullyComponent } from './component/order-successfully/order-successfully.component';
import { QuickviewComponent } from './component/quickview/quickview.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { AuthenticationGuard } from './authentication.guard';


const routes: Routes = [
  { path:'',redirectTo:"/login",pathMatch:'full'},
  { path: 'login', component: LoginBookStoreComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'home', component: DasboardComponent,canActivate:[AuthenticationGuard],
   
  children:[
  {path:'', redirectTo:'/home/books', pathMatch:'full' },
  { path: 'books', component: GetAllBooksComponent },
  { path:'quickview/:bookId',component:QuickviewComponent},
  { path:'getcart', component:GetcartComponent},
  { path:'order-successfully', component:OrderSuccessfullyComponent},
  { path:'wishlist', component:WishlistComponent},
  ]},
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
