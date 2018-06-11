import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './app-sidebar.component.html',
  styleUrls: ['./app-sidebar.component.css']
})
export class AppSidebarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['']);
  }
}
