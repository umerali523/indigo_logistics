import { Component, OnInit, ViewChild, TemplateRef, OnDestroy } from '@angular/core';
import {  FormControl, FormGroup , Validators } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';
import { NgModule } from '@angular/core';
import * as SecureLS from 'secure-ls';
import { AuthService } from '../../../../core/services/auth-service.service';
import { ComparePassowrd } from '../../../../shared/validators/compare-password.validator';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit , OnDestroy {

  constructor(private router:Router,private route: ActivatedRoute ,private authService : AuthService , private modalService: BsModalService) { 
    this.subscription = this.route.params.subscribe( params => this.token = params.token );

  }

  @ViewChild('template')
   public template: TemplateRef<any>;
   modalRef: BsModalRef;
   modalConfig = {
     keyboard : false, 
     ignoreBackdropClick: true
   }
   
  token:string;
  resetPasswordSpin : boolean;
  resetPasswordError:string;
  subscription;

  ngOnInit() {
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  error_arr = [];
  form = new FormGroup({
    email : new FormControl('', [Validators.required,Validators.email]),
    password : new FormControl('', [Validators.required , Validators.minLength(6)]),
    password_confirmation : new FormControl('', [Validators.required ,]) ,
  },
  {
    validators : ComparePassowrd.bind(this)
  });

  get email(){
    return this.form.get('email');
  }
  get password(){
    return this.form.get('password');
  }
  get password_confirmation(){
    return this.form.get('password_confirmation');
  }
  onSubmit(){
    if(!this.form.valid){
      if(this.email.hasError('required')){
        this.error_arr[0] = 'Email is required';

      }else if(this.email.hasError('email')){
        this.error_arr[0] = 'Invalid email address';
        
      }else{
        this.error_arr[0] = '';
        
      }
      if(this.password.hasError('required')){
        this.error_arr[1] = 'Password is required';

      }else if(this.password.hasError('minlength')){
        this.error_arr[1] = 'Password must contain atleat six letters';

      }else{
        this.error_arr[1] = '';
        
      }
      if(this.password_confirmation.hasError('required')){
        this.error_arr[2] = 'Confirm password is required';

      }else if(this.form.hasError('compare_password')){
        this.error_arr[2] = 'Password does not match';
        
      }else{
        this.error_arr[2] = '';
        
      }
    }else{
      this.error_arr = [];
      var obj = this.form.value;
      obj.token = this.token;
      this.resetPasswordSpin = true;
      this.authService.resetPassword(obj).subscribe(res=>{

        this.resetPasswordSpin = true;
        if(res["code"]==0){
          this.openModal(this.template);
        }
        console.log('Response:',res);
      },err=>{
        this.resetPasswordSpin = true;
        console.log('Err:',err);
      });
    }
  }
  openModal(temp) {
    console.log('Inside open Modal',temp);
    // , { class: 'gray modal-lg' }
    this.modalRef = this.modalService.show(
      temp ,
      Object.assign(this.modalConfig)
    );
  }
  closeModal(){
  
   this.modalRef.hide();
   this.router.navigate(['login']);
   
  }
}
