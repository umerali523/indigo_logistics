import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup , Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import * as SecureLS from 'secure-ls';
import { AuthService } from '../../../../core/services/auth-service.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  error_arr = [];
  form = new FormGroup({
    email : new FormControl('' , Validators.compose([Validators.required , Validators.email]) ),
  });

  
  get email(){
    return this.form.get('email');
  }

  onSubmit(){
     var user = {};
     if(!this.form.valid){
      
      if(this.email.hasError('required')){
        this.error_arr[0] = 'Email is required';

      }else if(this.email.hasError('email')){
        this.error_arr[0] = 'Invalid Email Address';

      }else{
        this.error_arr[0] = '';
        
      }
    }else{
      this.error_arr = [];
    }
     

  }

}
