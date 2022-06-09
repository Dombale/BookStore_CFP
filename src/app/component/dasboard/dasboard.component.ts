import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/service/book.service';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.scss']
})
export class DasboardComponent implements OnInit {
  itemcount:any;

  constructor(private bookService: BookService, private router: Router, private dataservice: DataService) { }

  ngOnInit(): void {

  }

  cart() {
    this.router.navigateByUrl("/home/getcart")
  }
  wishlist() {
    this.router.navigateByUrl("/home/wishlist")

  }
  logout() {
    this.router.navigateByUrl("/login")
  }
  searchBook(event: any) {
    console.log(event.target.value)// use for event/character binding
    this.dataservice.sendData(event.target.value)
  }
}
