import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as SecureLS from 'secure-ls';
import { AuthService } from '../../../core/services/auth-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {

  constructor(private router : Router , private authService : AuthService) {
    this.localStore = new SecureLS();
   }


  // public disabled = false;
  // public status: {isopen: boolean} = {isopen: false};
  // public spinner : boolean = false;
  localStore;
  username : string;
  userType;
  token : string;
  // public current_user;

  public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    //this.status.isopen = !this.status.isopen;
  }

  ngOnInit(): void {
    this.userType = this.localStore.get('user_type');
    this.username = this.localStore.get('first_name') + ' ' + this.localStore.get('last_name');
    console.log('CUser:',this.userType);
  }
  logout(){
  
   
    this.authService.logoutUser().subscribe(res=>{
      console.log(res);
      localStorage.clear();
      this.router.navigate(['/login']);
    },err=>{
      console.log('Err:',err);

    });
   

    
  }

}

