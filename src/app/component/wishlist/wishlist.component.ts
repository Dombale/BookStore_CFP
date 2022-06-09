import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  wishListbooks: any = [];
  wishlistcount: any;
  book: any;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getwishlist();
  }
  getwishlist() {
    this.bookService.usergetwishlist().subscribe((response: any) => {
      console.log(response);
      this.wishlistcount = response.result.length
      this.wishListbooks = response.result;
      console.log('get wishlist books')
    })
  }

  removewishlistbook(book: any) {
    this.bookService.userremovewishitem(book.product_id._id).subscribe((response: any) => {
      console.log(response);
    })
  }

}
