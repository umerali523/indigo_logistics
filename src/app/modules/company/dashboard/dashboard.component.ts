import { Component, OnInit, ViewChild } from '@angular/core';
import { DaterangePickerComponent, DaterangepickerConfig } from 'ng2-daterangepicker';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth-service.service';
import { ChartTheme, ILoadedEventArgs } from '@syncfusion/ej2-charts';
import { Browser, Internationalization } from '@syncfusion/ej2-base';

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


  public data: Object[] = [
    { x: new Date(2005, 0, 1), y: 21 }, { x: new Date(2006, 0, 1), y: 24 },
    { x: new Date(2007, 0, 1), y: 36 }, { x: new Date(2008, 0, 1), y: 38 },
    { x: new Date(2009, 0, 1), y: 54 }, { x: new Date(2010, 0, 1), y: 57 },
    { x: new Date(2011, 0, 1), y: 70 }
];
public data1: Object[] = [
  { x: new Date(2005, 0, 1), y: 21 }, { x: new Date(2006, 0, 1), y: 24 },
  { x: new Date(2007, 0, 1), y: 36 }, { x: new Date(2008, 0, 1), y: 38 },
  { x: new Date(2009, 0, 1), y: 54 }, { x: new Date(2010, 0, 1), y: 57 },
  { x: new Date(2011, 0, 1), y: 70 }
];
public data2: Object[] = [
  { x: new Date(2005, 0, 1), y: 21 }, { x: new Date(2006, 0, 1), y: 24 },
  { x: new Date(2007, 0, 1), y: 36 }, { x: new Date(2008, 0, 1), y: 38 },
  { x: new Date(2009, 0, 1), y: 54 }, { x: new Date(2010, 0, 1), y: 57 },
  { x: new Date(2011, 0, 1), y: 70 }
];
//Initializing Primary X Axis
public primaryXAxis: Object = {
    valueType: 'DateTime',
    labelFormat: 'y',
    intervalType: 'Years',
    edgeLabelPlacement: 'Shift',
    majorGridLines: { width: 0 }
};
//Initializing Primary Y Axis
public primaryYAxis: Object = {
    labelFormat: '{value}%',
    rangePadding: 'None',
    minimum: 0,
    maximum: 100,
    interval: 20,
    lineStyle: { width: 0 },
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 }
};
public chartArea: Object = {
    border: {
        width: 0
    }
};
public width: string = Browser.isDevice ? '100%' : '100%';
public cHeight = '320px;'
public marker: Object = {
    visible: true,
    height: 10,
    width: 10
};
public tooltip: Object = {
    enable: true
};
public load(args: ILoadedEventArgs): void {
    let selectedTheme: string = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    args.chart.theme = <ChartTheme>(selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1));
};
public title: string = '';
;

}
