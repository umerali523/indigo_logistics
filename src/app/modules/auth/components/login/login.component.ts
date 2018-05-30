import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup , Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import * as SecureLS from 'secure-ls';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { 
    //this.localStore = new SecureLS();
  }
 
  // localStore;
  // loginSpin : boolean = false; 
  // loginError;
  // currUser : User;
  // generalResponse : GeneralResponse;
  
  ngOnInit() {
    console.log('Inside Login COmponent');
    // if(this.authService.isLoggedIn()){
    //   this.router.navigate(['dashboard']);

    // }
  }

  
  form = new FormGroup({
    username : new FormControl('' , Validators.compose([Validators.required]) ),
    password : new FormControl('' , [ Validators.required])

  });

  get username(){
    return this.form.get('username');
  }
  get password(){
    return this.form.get('password');
  }

  onSubmit(){
  
    // this.loginSpin = true;
    // this.loginError = '';
    // if(this.form.valid){
    //   console.log('Form is valid and submitted');
      
    //   var loginRes = this.authService.loginUser(this.form.value);
      
    //   loginRes.subscribe(
    //     res=>{
          
    //       this.loginSpin = false;
    //       this.generalResponse = res['response'];
    //      if(this.generalResponse.code ==-1 || this.generalResponse.data==null){

    //         this.loginError = this.generalResponse.msg;

    //       }else{
           
    //       this.currUser = this.generalResponse.data['User'];

    //        console.log('Curr User:',this.currUser);
          
    //        var token = this.currUser.token;
    //        var practice_id = this.currUser.practice.id;
    //        var user_id = this.currUser.id
          
    //        this.localStore.set('access_token', token);
    //        this.localStore.set('practice_id', practice_id);
    //        this.localStore.set('default_practice_id', practice_id);
    //        this.localStore.set('user_id', user_id);
    //        this.localStore.set('current_user',this.currUser);
 
    //        this.router.navigate(['dashboard']);  
    //      }
    //     },
    //   err=>{
        
    //     this.loginError = err.message;
    //     this.loginSpin = false;
    //     console.log('LoginResponse Error:',err);
    //   }
    // );
      

    // }else{
    //  if(this.username.errors || this.password.errors){
    //   this.loginSpin = false;
    //   this.loginError = "Please provide both Username and Password";
    //  }
    // }
   

  }
  divClicked(){
    console.log('Div CLicked');
  }

}
