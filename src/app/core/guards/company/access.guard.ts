import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service.service';
import * as SecureLS from 'secure-ls';
import { Location } from '@angular/common';



@Injectable()
export class AccessCompanyGuard implements CanActivate {
  constructor(private authService : AuthService , private router : Router ,  private location: Location ){
   this.localStore = new SecureLS();
  }
  localStore;
  canActivate(){
    var userType = this.localStore.get('user_type');
    if(userType=="company"){

        return true;
    }else{
        //console.log(this.state.url);
        this.location.back();
        return false;
    }

     
  }
}
