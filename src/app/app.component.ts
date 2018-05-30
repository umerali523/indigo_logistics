import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(){console.log('Inside APp Constructor');}
  ngOnInit(){console.log('Inside Initing App');}
  title = 'app';
}
