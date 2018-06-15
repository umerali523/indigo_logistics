import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { api_params } from "../../../environments/environment";
import * as SecureLS from 'secure-ls';
import { Router } from "@angular/router";
@Injectable()
export class AdminService {

  constructor(private http: HttpClient , private router : Router) { 

  }
  
  getCompaniesList(){
    return this.http.get(api_params.COMPANY_LISTING_URL,{});

  }
  getEmployeesList(){
    return this.http.get(api_params.EMPLOYEE_LISTING_URL,{});

  }
  addCompany(cmp , token){
    var url = api_params.ADD_COMPANY_URL + "?token=" + token;
    return this.http.post(url  ,cmp);

  }
  addEmployee(emp , token){
    var url = api_params.ADD_EMPLOYEE_URL + "?token=" + token;
    return this.http.post(url,emp);

  }
}