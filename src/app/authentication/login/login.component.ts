import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor() { }

  ngOnInit() {
  	this.loginForm = new FormGroup({
  		"email": new FormControl('Email',  []),
  		"paswword": new FormControl('Password',  [])
  	});
  }

}
