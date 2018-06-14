import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { api_params } from "../../../environments/environment";
import * as SecureLS from 'secure-ls';
import { Router } from "@angular/router";
@Injectable()
export class CompanyService {

  constructor(private http: HttpClient , private router : Router) { 

  }
  changePassword(data){
    return this.http.post(api_params.CHANGE_PASSWORD_URL,data);
  }
}