import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-successfully',
  templateUrl: './order-successfully.component.html',
  styleUrls: ['./order-successfully.component.scss']
})
export class OrderSuccessfullyComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  continue(){
    this.router.navigateByUrl("/home/books")
  }
}
