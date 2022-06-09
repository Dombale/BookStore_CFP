import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from './http.service';



@Injectable({
  providedIn: 'root'
})
export class UserService {
   token:any;
   
  constructor(private httpService: HttpService) { this.token = localStorage.getItem('token') }


  Login(reqdata: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    return this.httpService.postService("login", reqdata, false, header)

  }

  Signup(reqdata: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    return this.httpService.postService("registration", reqdata, false, header)

  }
  editAddressService(reqData: any) {
    let header = {
      header: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token,
      })
    }
    return this.httpService.putService('edit_user', reqData, header)
  }
}
