import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { api_params } from "../../../environments/environment";
import * as SecureLS from 'secure-ls';
import { Router } from "@angular/router";
@Injectable()
export class AuthService {

  constructor(private http: HttpClient , private router : Router) { 

  }
  signupUser(user){
    return this.http.post(api_params.SIGNUP_URL,user);
  }
  loginUser(user){
    return this.http.post(api_params.LOGIN_URL,user);
  }
}