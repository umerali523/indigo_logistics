import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor( ) { 
  }


  ngOnInit() {
    
  }
  form = new FormGroup({
    first_name : new FormControl('' , [Validators.required]),
    last_name : new FormControl('' , [Validators.required]),
    email : new FormControl('', [Validators.required,Validators.email]),
    password : new FormControl('', [Validators.required]),
    phone_number : new FormControl('', [Validators.required,Validators.pattern("[0-9]+")]) ,
    confirm_password : new FormControl('', [Validators.required]) ,
    user_type : new FormControl('',) ,
    house_no : new FormControl('',) ,
    street : new FormControl('',) ,
    state : new FormControl('',) ,
    suburb : new FormControl('',) ,
    business : new FormControl('',) ,
    term_condition : new FormControl('',[Validators.required]),
  });
 
  
   
  addUser(){
    
       
  }
  get first_name(){
    return this.form.get('first_name');
  }
  get last_name(){
    return this.form.get('last_name');
  }
  get email(){
    return this.form.get('email');
  }
  get password(){
    return this.form.get('password');
  }
  get confirm_password(){
    return this.form.get('confirm_password');
  }
  get phone_number(){
    return this.form.get('phone_number');
  }
  get user_type(){
    return this.form.get('user_type');
  }
  get house_no(){
    return this.form.get('house_no');
  }
  get street(){
    return this.form.get('street');
  }
  get state(){
    return this.form.get('state');
  }
  get suburb(){
    return this.form.get('suburb');
  }
  get business(){
    return this.form.get('business');
  }
  get term_condition(){
    return this.form.get('term_condition');
  }

}
