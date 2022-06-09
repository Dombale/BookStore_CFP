import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-book-store',
  templateUrl: './login-book-store.component.html',
  styleUrls: ['./login-book-store.component.scss']
})


export class LoginBookStoreComponent implements OnInit {
  loginForm!:FormGroup;
  submitted=false;
  users='1';

  constructor(private formbuilder: FormBuilder, private userdata:UserService, private router:Router ) { }

  ngOnInit(): void {
    localStorage.setItem('SeesionUser',this.users)  
    this.loginForm = this.formbuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }
  onsubmit(){
    // console.log('submitted')
    this.submitted = true;
    if (this.loginForm.valid){
      let data = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      }
      this.userdata.Login(data).subscribe((response: any) => {
        console.log('login successfull', response);
       localStorage.setItem("token",response.result.accessToken);
      
        this.router.navigateByUrl("/home")
    
      })
    }
  }
}
