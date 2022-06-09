import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  token: any;
  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem('token')
  }

  usergetallbooks() {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.httpService.getService('get/book', true, header)
  }
  userAddToBag(productID: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.postService('add_cart_item/' + productID, {}, true, header)
  }

  userAddToWishList(productID: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.postService('add_wish_list/' + productID,{},true,header)
  }
  usergetcartlist(){
    let header = {
      headers: new HttpHeaders({
        'Content-type':'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.getService('get_cart_items', true,header);
  }

  userremovecartitem(productID: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token    
      })
    }
    return this.httpService.deleteService('remove_cart_item/' + productID,true,header)
  }

  checkOut(reqData: any) {
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token,
      })
    }
    return this.httpService.postService('add/order', reqData, true, headers)
  }

  usergetwishlist(){
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.getService('get_wishlist_items', true, header)
  }

  userremovewishitem(productID: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token    
      })
    }
    return this.httpService.deleteService('remove_wishlist_item/' + productID,true,header)
  }
}