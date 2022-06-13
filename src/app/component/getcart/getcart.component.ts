import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/service/book.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-getcart',
  templateUrl: './getcart.component.html',
  styleUrls: ['./getcart.component.scss']
})
export class GetcartComponent implements OnInit {

  book: any;
  cartcount: any;
  cartbooks: any = [];
  orderList: any = [];
  step = 0;
  orderForm!: FormGroup;
  submitted = false;

  constructor(private bookService: BookService, private formbuilder: FormBuilder, private userdata: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getcartlist();

    this.orderForm = this.formbuilder.group({
      fullName: ['', Validators.required],
      phonenumber: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
    })
  }


  getcartlist() {
    this.bookService.usergetcartlist().subscribe((response: any) => {
      console.log(response);
      this.cartcount = response.result.length
      this.cartbooks = response.result;

    })
  }
  removecartitem(book: any) {
    this.bookService.userremovecartitem(book._id).subscribe((response: any) => {
      console.log(response);
    })
  }

  editAddress() {
    // console.log('submitted')
    if (this.orderForm.valid) {
      let data = {
        addressType: "Home",
        fullAddress: this.orderForm.value.address,
        city: this.orderForm.value.city,
        state: this.orderForm.value.state
      }
      this.userdata.editAddressService(data).subscribe((response: any) => {
        console.log('edit address successfull', response);
        localStorage.setItem("token", response.result.accessToken);

      })
    }
  }


  ordersummary() {
    this.cartbooks.forEach((element: any) => {
      console.log("element", element);
      this.orderList.push(
        {
          "product_id": element.product_id._id,
          "product_name": element.product_id.bookName,
          "product_quantity": element.quantityToBuy,
          "product_price": element.product_id.price
        }
      );
    });
    console.log("orderList is this", this.orderList);

    let reqData = {
      "orders": this.orderList
    }
    this.bookService.checkOut(reqData).subscribe((response: any) => {
      console.log(response);
    })

    this.router.navigateByUrl("/home/order-successfully")
  }

  // total(){
  //   this.total = this.orderList.reduce((a:any, b:any) => {
  //     return a.product_price + b.product_price;
  //   });
    
  //   console.log('The sum is: ', this.total);
  // }


  step1() {
    this.step++;
  }
  step2() {
    this.step++;
  }
  step0() {
    this.step--;
  }
  _toggle() { }
}
