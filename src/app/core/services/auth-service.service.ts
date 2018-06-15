import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { api_params } from "../../../environments/environment";
import * as SecureLS from 'secure-ls';
import { JwtHelper } from 'angular2-jwt';

import { Router } from "@angular/router";
@Injectable()
export class AuthService {

  constructor(private http: HttpClient , private router : Router) { 
    this.localStore = new SecureLS();
  }
  localStore;
  signupUser(user){
    console.log('SignupUrl:',api_params.SIGNUP_URL);
    return this.http.post(api_params.SIGNUP_URL,user);
  }
  loginUser(user){
    return this.http.post(api_params.LOGIN_URL,user);
  }
  logoutUser(){
    return this.http.get(api_params.LOGOUT_URL);
  }
  verifyEmailAddress(token){
    return this.http.post(api_params.VERIFY_EMAIL,token);

  }
  forgetPassword(user){
    return this.http.post(api_params.FORGOT_PASSWORD_URL,user);

  }
  resetPassword(user){
    return this.http.post(api_params.RESET_PASSWORD_URL,user);

  }
  isLoggedIn(){
    let jwtHelper = new JwtHelper();
     var token = this.localStore.get("access_token");
    
   
    if(token){
     let expDate = jwtHelper.getTokenExpirationDate(token);
     let isExpired = jwtHelper.isTokenExpired(token);
     console.log('Exp Date',expDate);
     
      return !isExpired;
    }else{
      console.log('Else');
      this.router.navigate(['login']);
      return false;
    }
  }
}