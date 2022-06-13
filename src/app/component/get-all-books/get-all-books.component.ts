import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../service/book.service';
import { DataService } from 'src/app/service/data.service';


@Component({
  selector: 'app-get-all-books',
  templateUrl: './get-all-books.component.html',
  styleUrls: ['./get-all-books.component.scss']
})
export class GetAllBooksComponent implements OnInit {
  BookList: any = [];
  book: any;
  bookCount: any;
  filterString:any;
  totalLength:any;
  page:number =1;


  constructor(private bookService: BookService,private route:Router,private activatedroute:ActivatedRoute, private dataService:DataService) { }

  ngOnInit(): void {
    this.getAllBook();
    // console.log('booksArray has displayed')
    this.dataService.receivedData.subscribe((response:any)=>{
      console.log("Data received", response);
      this.filterString=response;
    
    this.totalLength=response.length;
    })
  }
  getAllBook() {
    this.bookService.usergetallbooks().subscribe((response: any) => {
      console.log(response, "GetAllBooks successfully");
      this.BookList = response.result;
    })
  }
  quickView(book: any) {
    localStorage.setItem('bookId', book._id);
    this.route.navigateByUrl('/home/quickview/' + book._id)
    
  }
  addToBag(book: any) {
    this.bookService.userAddToBag(book._id).subscribe((response: any) => {
      console.log(response, 'Books add to bag successfully');
      // console.log("productID", book._id);
    })
  }
  addToWishList(book: any) {
    this.bookService.userAddToWishList(book._id).subscribe((response: any) =>
      console.log(response, 'Books add to wishList successfully'))
  }
  lowtohigh() {
    this.BookList = this.BookList.sort((a: any, b: any) => a.price - b.price);
  }
  hightolow() {
    this.BookList = this.BookList.sort((a: any, b: any) => b.price - a.price);
  }
  newestarrivals() {
   
  } 
}