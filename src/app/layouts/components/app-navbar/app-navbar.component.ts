import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {

  constructor(private router : Router) { }


  // public disabled = false;
  // public status: {isopen: boolean} = {isopen: false};
  // public spinner : boolean = false;
  // public localStore;
  // public username : string;
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
    // this.current_user = this.localStore.get('current_user');
    // this.username = this.current_user.fname + ' ' + this.current_user.lname;
  }
  logout(){
    // this.spinner = true;
    // this.authService.logoutUser().subscribe(res=>{
    //   console.log(res);
    //   localStorage.clear();
    //   this.spinner = false;
    // this.router.navigate(['']);
    // });
    this.router.navigate(['']);

    
  }

}

