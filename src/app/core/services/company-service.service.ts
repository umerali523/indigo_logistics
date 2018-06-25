import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { api_params } from "../../../environments/environment";
import * as SecureLS from 'secure-ls';
import { Router } from "@angular/router";
@Injectable()
export class CompanyService {

  constructor(private http: HttpClient , private router : Router) { 

  }
  changePassword(data , token){
    var url = api_params.CHANGE_PASSWORD_URL + "?token=" + token;
    return this.http.post(url,data);
  }
  getCompaniesList(){
    return this.http.get(api_params.COMPANY_LISTING_URL,{});

  }
  getEmployeesList(){
    return this.http.get(api_params.COMPANY_LISTING_URL,{});
  }
  editProfile(data , token){
    var url = api_params.EDIT_PROFILE_URL + "?token=" + token;
    return this.http.post(url,data);
  }
}