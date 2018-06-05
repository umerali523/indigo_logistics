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
    this.http.post('http://203.143.95.45:12220/backend/public/api/users/register',user).subscribe(res=>{
        console.log('Signup Res:',res);
    },
    err=>{
        console.log('Signup Err:',err);
    });
  }
  loginUser(user){
    this.http.post('http://203.143.95.45:12220/backend/public/api/users/login',user).subscribe(res=>{
        console.log('Login Res:',res);
    },
    err=>{
        console.log('Login Err:',err);
    });

  }
}