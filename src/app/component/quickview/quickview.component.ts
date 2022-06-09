import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../../service/book.service';

@Component({
  selector: 'app-quickview',
  templateUrl: './quickview.component.html',
  styleUrls: ['./quickview.component.scss']
})
export class QuickviewComponent implements OnInit {

  bookId: any
  book: any
  value:any;
  bookStoreArray:any=[];
  BookList: any;

  constructor(private bookService:BookService,private router:Router) { }

  ngOnInit(): void {
    this.bookId = localStorage.getItem("bookId");
    console.log('book id  get')
    this.getEachBook();
  }
  getEachBook() {
    // this.bookService.usergetallbooks().subscribe((response: any) => {
    //   console.log(response, "GetAllBooks successfully");
    //   this.BookList = response.result;
    // })

    this.bookService.usergetallbooks().subscribe((response:any)=>{
      response.result.find((element:any)=>{
        if(element._id == this.bookId){
          this.book = element;
        }
      })
    })
  }

  addToBag(book: any) {
    this.bookService.userAddToBag(book._id).subscribe((response: any) => {
      console.log(response, 'Books add to bag successfully');
      console.log("productID", book._id);
    })
  }
  addToWishList(book: any) {
    this.bookService.userAddToWishList(book._id).subscribe((response: any) =>
      console.log(response, 'Books add to wishList successfully'))
  }
}
