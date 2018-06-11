import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ComparePassowrd } from '../../validators/compare-password.validator';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css','../../css/app-css.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  error_arr = [];
  form = new FormGroup({
    current_password : new FormControl('', [Validators.required]),
    password : new FormControl('', [Validators.required , Validators.minLength(6)]),
    password_confirmation : new FormControl('', [Validators.required ,]) ,
  },
  {
    validators : ComparePassowrd.bind(this)
  });

  get current_password(){
    return this.form.get('current_password');
  }
  get password(){
    return this.form.get('password');
  }
  get password_confirmation(){
    return this.form.get('password_confirmation');
  }
  onSubmit(){
    if(!this.form.valid){
      if(this.current_password.hasError('required')){
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
      this.error_arr = [];
    }
  }
}
