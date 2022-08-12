import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent {

  constructor(public route:Router){}
  login(){
    console.log("login ")
    this.route.navigate(['dashboard']);
  }
 }
