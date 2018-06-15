import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service.service';
import * as SecureLS from 'secure-ls';


@Injectable()
export class LogGuard implements CanActivate {
  constructor(private authService : AuthService , private router : Router){
    this.localStore = new SecureLS();
  }
  localStore;
  canActivate(){
     var guardFlag = this.authService.isLoggedIn();
     if(guardFlag){
      return false;

     }else{
    this.router.navigate(['/login']);
    return guardFlag;

     }
  }
}
