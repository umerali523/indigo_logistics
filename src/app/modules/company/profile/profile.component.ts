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
import { CompanyService } from '../../../core/services/company-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css','../../../shared/css/app-css.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private authService : AuthService, private router : Router,private modalService: BsModalService , private cmpService : CompanyService) { 
    this.localStore = new SecureLS();
    this.token = this.localStore.get('access_token');

  }

  ngOnInit() {
    this.spinner = true;
    this.authService.getUser().subscribe(res=>{
      if(res["code"]==0){
        this.user = res["data"];
        this.first_name.patchValue(this.user.first_name);
        this.last_name.patchValue(this.user.last_name);
        this.email.patchValue(this.user.email);
        this.phone.patchValue(this.user.phone);
        this.house_no.patchValue(this.user.house_no);
        this.street.patchValue(this.user.street);
        this.suburb.patchValue(this.user.suburb);
        this.state.patchValue(this.user.state);
        this.business.patchValue(this.user.business);
        this.spinner = false;
        console.log('User:',this.user);
      }

    },err=>{

    });
  }

  error_arr = [];
  spinner : boolean;
  userType : string = '';
  errorMessage : string;
  public query3 = '';
  token;
  user;
  
 
  localStore;

  form = new FormGroup({
    first_name : new FormControl('' , [Validators.required]),
    last_name : new FormControl('' , [Validators.required]),
    email : new FormControl('', [Validators.required,Validators.email]),
    phone : new FormControl('', [Validators.required,Validators.pattern("[0-9]+")]),
    house_no : new FormControl('',[Validators.required]) ,
    street : new FormControl('',[Validators.required]) ,
    suburb : new FormControl('',[Validators.required]) ,
    state : new FormControl({value:'',disabled:true},[Validators.required]) ,
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
       this.error_arr = [];
       this.spinner = true;
       var user = {};
       user['user'] = this.form.value;
       this.cmpService.editProfile(user,this.token).subscribe(res=>{
         this.spinner = false;
         if(res['code']==0){
          this.router.navigate(['/company/dashboard']);
         }
        console.log('EditProf:',res);
       },err=>{
        this.spinner = false;
        console.log('EditProfErr:',err);
       });;

    }

    
    

       
  }
  public staticList = suburbs_list;
  onFileChange = function(event){
    console.log('Inside OnFileChange');
  }
  public selectedSuburb (result) {
    this.query3 = result;
    this.error_arr[6] = '';
    console.log('Selected:',this.query3);
    this.authService.getState({'postsuburb' : this.query3}).subscribe(res=>{
      console.log('GetState Res:',res);
      if(res['code']==0){
        var state = res['data']['state'];
        if(state!=""){
          this.state.patchValue(state);
          this.suburb.patchValue(this.query3);
        }else{
          this.state.patchValue('');
          this.suburb.patchValue("");
          this.error_arr[6] = 'Invalid Suburb/Postcode';

        }

      }
    },err=>{
      console.log('GetState Err:',err);
    });
  }
 

}
