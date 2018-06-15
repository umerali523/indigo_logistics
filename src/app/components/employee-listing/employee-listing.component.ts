import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../core/services/admin-service.service';

@Component({
  selector: 'app-employee-listing',
  templateUrl: './employee-listing.component.html',
  styleUrls: ['./employee-listing.component.css']
})
export class EmployeeListingComponent implements OnInit {

  constructor(private adminService : AdminService) { }

  generalRes;
  employeeData;
  spinFlag : boolean;

  ngOnInit() {
    this.spinFlag = true;
    this.adminService.getEmployeesList().subscribe(res=>{

      this.spinFlag = false;

      console.log('Emp List:',res);
      this.generalRes = res;
      if(this.generalRes.code==0){
        this.employeeData = this.generalRes.data;
        console.log('EmpData:',this.employeeData);

      }

    },err=>{
    this.spinFlag = false;

      console.log('Emp List:',err);
``      
    });
  }

}
