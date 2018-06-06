import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService : AuthService, private router : Router ) { 
  }
  error_arr = [];
  

  ngOnInit() {
    
  }
  form = new FormGroup({
    first_name : new FormControl('' , [Validators.required]),
    last_name : new FormControl('' , [Validators.required]),
    email : new FormControl('', [Validators.required,Validators.email]),
    password : new FormControl('', [Validators.required , Validators.minLength(6)]),
    phone : new FormControl('', [Validators.required,Validators.pattern("[0-9]+")]),
    password_confirmation : new FormControl('', [Validators.required ,]) ,
    house_no : new FormControl('',[Validators.required]) ,
    street : new FormControl('',[Validators.required]) ,
    suburb : new FormControl('',[Validators.required]) ,
    state : new FormControl('',[Validators.required]) ,
    business : new FormControl('',[Validators.required]) ,
    user_type : new FormControl('',[Validators.required]) ,
    term_condition : new FormControl('',[Validators.required]),
  });
 
  
   
  addUser(){
  
    if(!this.form.valid){
      console.log(this.password);
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
      if(this.password.hasError('required')){
        this.error_arr[4] = 'Password is required';

      }else if(this.password.hasError('minlength')){
        this.error_arr[4] = 'Password must contain atleat six letters';

      }else{
        this.error_arr[4] = '';
        
      }
      if(this.password_confirmation.hasError('required')){
        this.error_arr[5] = 'Confirm password is required';

      }else{
        this.error_arr[5] = '';
        
      }

      if(this.house_no.hasError('required')){
        this.error_arr[6] = 'House No is required';

      }else{
        this.error_arr[6] = '';
        
      }
      if(this.street.hasError('required')){
        this.error_arr[7] = 'Street No is required';

      }else{
        this.error_arr[7] = '';
        
      }
      if(this.suburb.hasError('required')){
        this.error_arr[8] = 'Suburb/Postcode is required';

      }else{
        this.error_arr[8] = '';
        
      }
      if(this.state.hasError('required')){
        this.error_arr[9] = 'State is required';

      }else{
        this.error_arr[9] = '';
        
      }
      if(this.business.hasError('required')){
        this.error_arr[10] = 'Business name is required';

      }else{
        this.error_arr[10] = '';
        
      }
      if(this.user_type.hasError('required')){
        this.error_arr[11] = 'User type is required';

      }else{
        this.error_arr[11] = '';
        
      }
      if(this.term_condition.hasError('required')){
        this.error_arr[12] = 'Select terms & conditions';

      }else{
        this.error_arr[12] = '';
        
      }
      console.log(this.error_arr);
      
    }else{
      this.error_arr = [];
      var user = {};
      user['user'] = this.form.value;
      this.authService.signupUser(user).subscribe(res=>{
        console.log('signup response:',res);
        this.router.navigate(['dashboard']);
        
      },err=>{
        console.log('signup error:',err);

      });

    }

    
    

       
  }
  get first_name(){
    return this.form.get('first_name');
  }
  get last_name(){
    return this.form.get('last_name');
  }
  get email(){
    return this.form.get('email');
  }
  get password(){
    return this.form.get('password');
  }
  get password_confirmation(){
    return this.form.get('password_confirmation');
  }
  get phone(){
    return this.form.get('phone');
  }
  get user_type(){
    return this.form.get('user_type');
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
  get term_condition(){
    return this.form.get('term_condition');
  }

}
