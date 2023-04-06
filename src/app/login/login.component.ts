import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
/* For ---Template */
  loginSubmit(loginForm:any){
    console.log(loginForm);
      }

      
}
