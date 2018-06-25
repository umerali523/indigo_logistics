import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';

import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth-service.service';
// import { AuthService } from '';
 import { ComparePassowrd } from '../../../shared/validators/compare-password.validator';
 import * as SecureLS from 'secure-ls';
 import { suburbs_list } from "../../../shared/services/suburbs";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css','../../../shared/css/app-css.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private authService : AuthService, private router : Router,private modalService: BsModalService) { 
    this.localStore = new SecureLS();

  }

  ngOnInit() {

  }

  error_arr = [];
  spinner : boolean;
  userType : string = '';
  errorMessage : string;
  public query3 = '';

  
 
  localStore;

  form = new FormGroup({
    first_name : new FormControl('' , [Validators.required]),
    last_name : new FormControl('' , [Validators.required]),
    email : new FormControl('', [Validators.required,Validators.email]),
    phone : new FormControl('', [Validators.required,Validators.pattern("[0-9]+")]),
    house_no : new FormControl('',[Validators.required]) ,
    street : new FormControl('',[Validators.required]) ,
    suburb : new FormControl('',[Validators.required]) ,
    state : new FormControl('',[Validators.required]) ,
    business : new FormControl('',[Validators.required]) ,
  });
  get first_name(){
    return this.form.get('first_name');
  }
  get last_name(){
    return this.form.get('last_name');
  }
  get email(){
    return this.form.get('email');
  }
  get phone(){
    return this.form.get('phone');
  }
  
  get house_no(){
    return this.form.get('house_no');
  }
  get street(){
    return this.form.get('street');
  }
  get state(){
    return this.form.get('state');
  }
  get suburb(){
    return this.form.get('suburb');
  }
  get business(){
    return this.form.get('business');
  }

  editProfile(){
   
    if(!this.form.valid){
      if(this.first_name.hasError('required')){
        this.error_arr[0] = 'First Name is required';

      }else{
        this.error_arr[0] = '';
        
      }
      if(this.last_name.hasError('required')){
        this.error_arr[1] = 'Last Name is required';

      }else{
        this.error_arr[1] = '';
        
      }
      if(this.email.hasError('required')){
        this.error_arr[2] = 'Email is required';

      }else if(this.email.hasError('email')){
        this.error_arr[2] = 'Invalid email address';
        
      }else{
        this.error_arr[2] = '';
        
      }
      if(this.phone.hasError('required')){
        this.error_arr[3] = 'Phone is required';

      }else if(this.phone.hasError('pattern')){
        this.error_arr[3] = 'Invalid phone number';

      }else{
        this.error_arr[3] = '';
        
      }
     
     

      if(this.house_no.hasError('required')){
        this.error_arr[4] = 'House No is required';

      }else{
        this.error_arr[4] = '';
        
      }
      if(this.street.hasError('required')){
        this.error_arr[5] = 'Street No is required';

      }else{
        this.error_arr[5] = '';
        
      }
      if(this.suburb.hasError('required')){
        this.error_arr[6] = 'Suburb/Postcode is required';

      }else{
        this.error_arr[6] = '';
        
      }
      if(this.state.hasError('required')){
        this.error_arr[7] = 'State is required';

      }else{
        this.error_arr[7] = '';
        
      }
      if(this.business.hasError('required')){
        this.error_arr[8] = 'Business name is required';

      }else{
        this.error_arr[8] = '';
        
      }
      console.log(this.error_arr);
      
    }else{
      // this.error_arr = [];
      // this.spinner = true;
      // var user = {};
      // this.form.value.password = this.form.value.password_form.password;
      // this.form.value.password_confirmation = this.form.value.password_form.password_confirmation;
      // user['user'] = this.form.value;

    }

    
    

       
  }
  public staticList = suburbs_list;

  public selectedSuburb (result) {
    this.query3 = result;
    console.log('Selected:',this.query3);
    this.authService.getState({'postsuburb' : this.query3}).subscribe(res=>{
      console.log('GetState Res:',res);
    },err=>{
      console.log('GetState Err:',err);
    });
  }
 

}
