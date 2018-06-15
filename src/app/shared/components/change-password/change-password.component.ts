import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ComparePassowrd } from '../../validators/compare-password.validator';
import { AuthService } from '../../../core/services/auth-service.service';
import * as SecureLS from 'secure-ls';
import { CompanyService } from '../../../core/services/company-service.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css','../../css/app-css.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private companyService : CompanyService , private router : Router , private location  :Location) {
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
    old_password : new FormControl('', [Validators.required]),
    password : new FormControl('', [Validators.required , Validators.minLength(6)]),
    password_confirmation : new FormControl('', [Validators.required ,]) ,
  },
  {
    validators : ComparePassowrd.bind(this)
  });

  get old_password(){
    return this.form.get('old_password');
  }
  get password(){
    return this.form.get('password');
  }
  get password_confirmation(){
    return this.form.get('password_confirmation');
  }
  onSubmit(){
    
    if(!this.form.valid){
      if(this.old_password.hasError('required')){
        this.error_arr[0] = 'Please enter current password';

      }else{
        this.error_arr[0] = '';
        
      }
      if(this.password.hasError('required')){
        this.error_arr[1] = 'Please enter new password';

      }else if(this.password.hasError('minlength')){
        this.error_arr[1] = 'New Password must contain atleat six letters';

      }else{
        this.error_arr[1] = '';
        
      }
      if(this.password_confirmation.hasError('required')){
        this.error_arr[2] = 'Please enter confirm password';

      }else if(this.form.hasError('compare_password')){
        this.error_arr[2] = 'Confirm Password does not match';
        
      }else{
        this.error_arr[2] = '';
        
      }
    }else{
      this.spinner = true;
      this.error_arr = [];
      var obj = this.form.value;
      obj.token = this.localStore.get('access_token');
      var token = this.localStore.get('access_token');
      this.companyService.changePassword(obj , token).subscribe(res=>{
        this.generalRes = res;
        this.spinner = false;
        if(this.generalRes.code ==0){

          console.log('Password changed successfully');
          this.location.back();
          //this.router.navigate(['/company']);
        }else if(this.generalRes.code==-1){
          if(this.generalRes.data){
          var err = this.generalRes.data.errors;
            if(err['old_password']){
              this.error_arr[0] = err['old_password'][0];
            }else{
              this.error_arr[0]="";
            } 
            if(err['password']){
              this.error_arr[1] = err['password'][0];
            }else{
              this.error_arr[1]="";
            } 

          }


        }
        console.log('change pass res:',res);

      },err=>{
        this.spinner = false;
        console.log('err:',err);
      });
      
    }
  }
}
