import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../core/services/admin-service.service';

@Component({
  selector: 'app-company-listing',
  templateUrl: './company-listing.component.html',
  styleUrls: ['./company-listing.component.css']
})
export class CompanyListingComponent implements OnInit {

  constructor(private adminService : AdminService) { }

  generalRes;
  companyData;
  spinFlag : boolean;
  ngOnInit() {
    this.spinFlag = true;
    this.adminService.getCompaniesList().subscribe(res=>{
      this.generalRes = res;
      this.spinFlag = false;
      if(this.generalRes.code==0){
        this.companyData = this.generalRes.data;

      }
      console.log('Company List:',res);

    },err=>{

      this.spinFlag = false;
      console.log('Company ERR:',err);

    });
  }

}
