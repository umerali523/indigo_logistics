import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './app-sidebar.component.html',
  styleUrls: ['./app-sidebar.component.css']
})
export class AppSidebarComponent implements OnInit {

  constructor(private router: Router , private authService : AuthService) { }

  ngOnInit() {
  }

  logout(){
    this.authService.logoutUser().subscribe(res=>{
      console.log(res);
      localStorage.clear();
      this.router.navigate(['/login']);
    },err=>{
      console.log(err);

    });
  }
}
