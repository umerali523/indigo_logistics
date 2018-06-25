import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth-service.service';
import * as SecureLS from 'secure-ls';
import { CompanyService } from '../../../core/services/company-service.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-add-address-book',
  templateUrl: './add-address-book.component.html',
  styleUrls: ['./add-address-book.component.css', '../../../shared/css/app-css.component.css']
})
export class AddAddressBookComponent implements OnInit {

  constructor(private companyService : CompanyService ,) { 
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
    name : new FormControl('' , [Validators.required]),
    address : new FormControl('' , [Validators.required]),
    email : new FormControl('', [Validators.required,Validators.email]),
    phone : new FormControl('', [Validators.required,Validators.pattern("[0-9]+")]),
    //password_confirmation : new FormControl('', [Validators.required ,ComparePassowrd(this.form)]) ,
    suburb : new FormControl('',[Validators.required]) ,
    state : new FormControl('',[Validators.required]) ,
    company_name : new FormControl('',[Validators.required]) ,
    delivery_type : new FormControl('',[Validators.required]) ,
  });

  get name(){
    return this.form.get('name');
  }
 
  get email(){
    return this.form.get('email');
  }
  get state(){
    return this.form.get('state');
  }
  get suburb(){
    return this.form.get('suburb');
  }
 
 
  
  get phone(){
    return this.form.get('phone');
  }
  
  get company_name(){
    return this.form.get('company_name');
  }
 
  get delivery_type(){
    return this.form.get('delivery_type');
  }
  
  get address(){
    return this.form.get('address ');
  }

  onSubmit(){
    
    if(!this.form.valid){
      if(this.name.hasError('required')){
        this.error_arr[0] = 'Name is required';

      }else{
        this.error_arr[0] = '';
        
      }
     
      if(this.email.hasError('required')){
        this.error_arr[1] = 'Email is required';

      }else if(this.email.hasError('email')){
        this.error_arr[1] = 'Invalid email address';
        
      }else{
        this.error_arr[1] = '';
        
      }
      if(this.phone.hasError('required')){
        this.error_arr[2] = 'Phone is required';

      }else if(this.phone.hasError('pattern')){
        this.error_arr[2] = 'Invalid phone number';

      }else{
        this.error_arr[2] = '';
        
      }

      
      if(this.suburb.hasError('required')){
        this.error_arr[3] = 'Suburb/Postcode is required';

      }else{
        this.error_arr[3] = '';
        
      }
      if(this.state.hasError('required')){
        this.error_arr[4] = 'State is required';

      }else{
        this.error_arr[4] = '';
        
      }
      if(this.company_name.hasError('required')){
        this.error_arr[5] = 'Company name is required';

      }else{
        this.error_arr[5] = '';
        
      }
      if(this.delivery_type.hasError('required')){
        this.error_arr[6] = 'Delivery type is required';

      }else{
        this.error_arr[6] = '';
        
      }
      if(this.address.hasError('required')){
        this.error_arr[7] = 'Address type is required';

      }else{
        this.error_arr[7] = '';
        
      }
      console.log(this.error_arr);
      
    }else{
      this.error_arr = [];
      // this.signupSpin = true;
      // var user = {};
      // this.form.value.password = this.form.value.password_form.password;
      // this.form.value.password_confirmation = this.form.value.password_form.password_confirmation;
      // user['user'] = this.form.value;

      // if(this.signupFlag){
      //   this.signupUser(user);

      // }else if(this.addCmpFlag){
      //   this.addCompany(user);

      // }else if(this.addEmpFlag){
      //   this.addEmployee(user);

      // }
     

    }

    
    

       
  }

}
