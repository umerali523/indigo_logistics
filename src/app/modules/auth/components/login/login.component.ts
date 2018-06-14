import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup , Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import * as SecureLS from 'secure-ls';
import { map } from 'rxjs/operators';
import { AuthService } from '../../../../core/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router , private authService : AuthService) { 
    this.localStore = new SecureLS();
  }
 
  localStore;
  loginSpin : boolean; 
  loginError;
  // currUser : User;
  // generalResponse : GeneralResponse;
  
  ngOnInit() {
    // if(this.authService.isLoggedIn()){
    //   this.router.navigate(['dashboard']);

    // }
  }

  error_arr = [];
  form = new FormGroup({
    email : new FormControl('' , Validators.compose([Validators.required , Validators.email]) ),
    password : new FormControl('' , [ Validators.required])

  });

  get email(){
    return this.form.get('email');
  }
  get password(){
    return this.form.get('password');
  }

  onSubmit(){
     this.loginError = '';
     console.log(this.form);
     
     var email = this.form.value.email;
     var password = this.form.value.password;
     var loginUser = {};
     if(!this.form.valid){
      if(this.email.hasError('required')){
        this.error_arr[0] = 'Email is required';

      }else if(this.email.hasError('email')){
        this.error_arr[0] = 'Invalid Email Address';

      }else{
        this.error_arr[0] = '';
        
      }
      if(this.password.hasError('required')){
        this.error_arr[1] = 'Password is required';

      }else{
        this.error_arr[1] = '';
        
      }

     }else{
      this.loginSpin = true;
      this.error_arr = [];
      loginUser['user'] = this.form.value; 
      this.authService.loginUser(loginUser).subscribe(res=>{
        console.log('LoginResponse:',res);
        this.loginSpin = false;
        if(res['code']==0){

          var user = res['data'];
          this.localStore.set('access_token',user.token);
          this.localStore.set('first_name',user.first_name);
          this.localStore.set('last_name',user.last_name);
          this.localStore.set('user_type',user.user_type);
          if(user.user_type=='admin'){
            this.router.navigate(['dashboard']);
          }
          if(user.user_type=='company'){
            this.router.navigate(['company']);
            
          }
      }

      },
      err=>{
        this.loginSpin = false;
        var err = err['error'];
        this.loginError = err.message;
        

      });
     }
     
   
    //  if(username=="admin"&&password=="admin"){
    //   this.router.navigate(['dashboard']);
    //  }

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
