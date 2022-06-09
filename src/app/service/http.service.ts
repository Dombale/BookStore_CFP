import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl=environment.baseurl
  constructor(private httpclient : HttpClient) { }

  postService(url : any, reqdata : any, token : boolean=false, httpOptions : any ){
    return this.httpclient.post(this.baseUrl+url,reqdata,token && httpOptions)
  } 
  getService(url: string, token: boolean = false, httpOptions:any={}) {
    return this.httpclient.get(this.baseUrl + url, token && httpOptions)
  }
  deleteService(url:any, token: boolean = false, httpOptions:any={}) {
    return this.httpclient.delete(this.baseUrl + url, token && httpOptions)
  }
  putService(url:any, token: boolean = false, httpOptions:any={}) {
    return this.httpclient.put(this.baseUrl + url, token && httpOptions)
  }
}
