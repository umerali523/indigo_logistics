
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth-service.service';
import * as SecureLS from 'secure-ls';
import { CompanyService } from '../../../core/services/company-service.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-apply-for-credit',
  templateUrl: './apply-for-credit.component.html',
  styleUrls: ['./apply-for-credit.component.css', '../../../shared/css/app-css.component.css']
})
export class ApplyForCreditComponent implements OnInit {

  constructor(private companyService : CompanyService , private router : Router ) {
    this.localStore =  new SecureLS();
   }

  ngOnInit() {
  }


  error_arr = [];
  localStore;
  errorMessage: string;
  successMessage:  string;
  generalRes;
  spinner : boolean;
  form = new FormGroup({
    business : new FormControl('', [Validators.required]),
    acn_number : new FormControl('', [Validators.required]),
    weekly_spend : new FormControl('', [Validators.required ,]) ,
  });

  get business(){
    return this.form.get('business');
  }
  get acn_number(){
    return this.form.get('acn_number');
  }
  get weekly_spend(){
    return this.form.get('weekly_spend');
  }
  onSubmit(){
    
    if(!this.form.valid){
      if(this.business.hasError('required')){
        this.error_arr[0] = 'Please enter bussiness name.';

      }else{
        this.error_arr[0] = '';
        
      }
      if(this.acn_number.hasError('required')){
        this.error_arr[1] = 'Please enter ABN/ACN number.';

      }else{
        this.error_arr[1] = '';
        
      }
      if(this.weekly_spend.hasError('required')){
        this.error_arr[2] = 'Please enter average weekly spend.';

      }else{
        this.error_arr[2] = '';
        
      }
    
    }else{
      // this.spinner = true;
      // this.error_arr = [];
      // var obj = this.form.value;
      // obj.token = this.localStore.get('access_token');
      // var token = this.localStore.get('access_token');
      // this.companyService.changePassword(obj , token).subscribe(res=>{
      //   this.generalRes = res;
      //   this.spinner = false;
      //   if(this.generalRes.code ==0){

      //     console.log('Password changed successfully');
      //     this.location.back();
      //     //this.router.navigate(['/company']);
      //   }else if(this.generalRes.code==-1){
      //     if(this.generalRes.data){
      //     var err = this.generalRes.data.errors;
      //       if(err['old_password']){
      //         this.error_arr[0] = err['old_password'][0];
      //       }else{
      //         this.error_arr[0]="";
      //       } 
      //       if(err['password']){
      //         this.error_arr[1] = err['password'][0];
      //       }else{
      //         this.error_arr[1]="";
      //       } 

      //     }


      //   }
      //   console.log('change pass res:',res);

      // },err=>{
      //   this.spinner = false;
      //   console.log('err:',err);
      // });
      
    }
  }
}
