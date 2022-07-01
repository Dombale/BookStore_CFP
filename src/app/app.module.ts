import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import { AuthgurdServiceService } from './authgurd-service.service';
import {MatBadgeModule} from '@angular/material/badge';
import { NgxPaginationModule } from 'ngx-pagination';


import { LoginBookStoreComponent } from './component/login-book-store/login-book-store.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { DasboardComponent } from './component/dasboard/dasboard.component';
import { GetAllBooksComponent } from './component/get-all-books/get-all-books.component';
import { QuickviewComponent } from './component/quickview/quickview.component';
import { GetcartComponent } from './component/getcart/getcart.component';
import { OrderSuccessfullyComponent } from './component/order-successfully/order-successfully.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { FilterPipe } from './pipe/filter.pipe';
import { environment } from '../environments/environment';



// import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginBookStoreComponent,
    DasboardComponent,
    GetAllBooksComponent,
    QuickviewComponent,
    GetcartComponent,
    OrderSuccessfullyComponent,
    WishlistComponent,
    FilterPipe,
 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, 
    MatToolbarModule,
    MatMenuModule,
    MatSelectModule,
    MatTooltipModule,
    MatExpansionModule,
    MatRadioModule,
    NgxPaginationModule,
    MatBadgeModule,

  ],


  providers: [AuthgurdServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
