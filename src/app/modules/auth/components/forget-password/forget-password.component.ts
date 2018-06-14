import { Component, OnInit , TemplateRef, ViewChild  } from '@angular/core';
import {  FormControl, FormGroup , Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import * as SecureLS from 'secure-ls';
import { AuthService } from '../../../../core/services/auth-service.service';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private modalService: BsModalService,private authService : AuthService , private router : Router) { }

  @ViewChild('template')
  public template: TemplateRef<any>;
  modalRef: BsModalRef;

  forgetPasswordSpin : boolean ;
  forgotPassErr : string;
  openModal(temp) {
    console.log('Inside Open Modal');
    this.modalRef = this.modalService.show(temp,
      Object.assign({keyboard : false, ignoreBackdropClick: true}, { class: 'gray modal-lg' }));
  }
  closeModal(){
   
   this.modalRef.hide();
   this.router.navigate(['/login']);
   
  }

  ngOnInit() {
  }

  error_arr = [];
  form = new FormGroup({
    email : new FormControl('' , Validators.compose([Validators.required , Validators.email]) ),
  });

  
  get email(){
    return this.form.get('email');
  }

  onSubmit(){
     var user = {};
     if(!this.form.valid){
      
      if(this.email.hasError('required')){
        this.error_arr[0] = 'Email is required';

      }else if(this.email.hasError('email')){
        this.error_arr[0] = 'Invalid Email Address';

      }else{
        this.error_arr[0] = '';
        
      }
    }else{
      this.error_arr = [];
      this.forgetPasswordSpin = true;
      this.authService.forgetPassword(this.form.value).subscribe(res=>{
        
      this.forgetPasswordSpin = false;
      if(res['code']==0){
        this.openModal(this.template);
      }

        console.log('ForgetPass:',res);
      },err=>{
        this.forgetPasswordSpin = false;
        this.forgotPassErr = err['error'].message;
        console.log('Err:',err);

      });

    }
     

  }

}
