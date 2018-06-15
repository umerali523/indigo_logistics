import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service.service';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService : AuthService , private router : Router){

  }
  canActivate(){
     var guardFlag = this.authService.isLoggedIn();
     if(guardFlag){
      return guardFlag;

     }else{
    this.router.navigate(['/login']);
    return guardFlag;

     }
  }
}
