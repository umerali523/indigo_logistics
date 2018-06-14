import { Component, OnInit, ViewChild } from '@angular/core';
import { DaterangePickerComponent, DaterangepickerConfig } from 'ng2-daterangepicker';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router : Router, private authService : AuthService) { }

  ngOnInit() {
  }
  dashboardSpinner : boolean;


  @ViewChild(DaterangePickerComponent)
  private picker: DaterangePickerComponent;

  public daterange: any = {};
  public options: any = {

      locale: { format: 'DD-MM-YYYY' },
      alwaysShowCalendars: false,
      maxDate : new Date(),
      minDate : new Date(1960 , 0 , 1),
      singleDatePicker: true,
      showDropdowns: true,
      autoUpdateInput : false
  };
  public selectedDate(value: any, datepicker?: any) {
   // this.dobValidityFlag = true;
    datepicker.start = value.start;
    datepicker.end = value.end;
    this.daterange.start = value.start;
    this.daterange.end = value.end;
    this.daterange.label = value.label;
    console.log(value.start);
    //this.tempDate = value.start;
   // this.dob.patchValue(this.convertDateFormat(value.start));

}
logout(){
    this.dashboardSpinner = true;
    this.authService.logoutUser().subscribe(res=>{
      this.dashboardSpinner = false;
      console.log(res);
      localStorage.clear();
      this.router.navigate(['/login']);
    },err=>{
      this.dashboardSpinner = false;
      console.log(err);

    });
  }

}
