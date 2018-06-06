import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup , Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import * as SecureLS from 'secure-ls';
import { AuthService } from '../../../../core/services/auth-service.service';
import { ComparePassowrd } from '../../../../shared/validators/compare-password.validator';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  error_arr = [];
  form = new FormGroup({
    password : new FormControl('', [Validators.required , Validators.minLength(6)]),
    password_confirmation : new FormControl('', [Validators.required ,]) ,
  },
  {
    validators : ComparePassowrd.bind(this)
  });

  
  get password(){
    return this.form.get('password');
  }
  get password_confirmation(){
    return this.form.get('password_confirmation');
  }
  onSubmit(){
    if(!this.form.valid){
      if(this.password.hasError('required')){
        this.error_arr[0] = 'Password is required';

      }else if(this.password.hasError('minlength')){
        this.error_arr[0] = 'Password must contain atleat six letters';

      }else{
        this.error_arr[0] = '';
        
      }
      if(this.password_confirmation.hasError('required')){
        this.error_arr[1] = 'Confirm password is required';

      }else if(this.form.hasError('compare_password')){
        this.error_arr[1] = 'Password does not match';
        
      }else{
        this.error_arr[1] = '';
        
      }
    }else{
      this.error_arr = [];
    }
  }
}
