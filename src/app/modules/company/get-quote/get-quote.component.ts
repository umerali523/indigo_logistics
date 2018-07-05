import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators , FormBuilder, FormArray } from '@angular/forms';
import { CompanyService } from '../../../core/services/company-service.service';
import { Router } from '@angular/router';
import * as SecureLS from 'secure-ls';


@Component({
  selector: 'app-get-quote',
  templateUrl: './get-quote.component.html',
  styleUrls: ['./get-quote.component.css' , '../../../shared/css/app-css.component.css']
})
export class GetQuoteComponent implements OnInit {

  constructor(private companyService : CompanyService , private router : Router) { 
    this.localStore =  new SecureLS();

  }

  ngOnInit() {
    
  }

  error_arr = [];
  localStore;
  errorMessage: string;
  successMessage:  string;
  generalRes;
  packages: any[] = [];
  spinner : boolean;
  form = new FormGroup({
    pickup_location : new FormControl('', [Validators.required]),
    pickup_location_type : new FormControl('', [Validators.required]),
    delivery_location : new FormControl('', [Validators.required ,]) ,
    delivery_location_type : new FormControl('', [Validators.required ,]) ,
    package_type : new FormControl('', [Validators.required]),
    package_type_weight : new FormControl('', [Validators.required]),
    package_type_length : new FormControl('', [Validators.required]),
    package_type_width : new FormControl('', [Validators.required]),
    package_type_height : new FormControl('', [Validators.required]),
    package_type_quantity : new FormControl('', [Validators.required]),

  });

  get pickup_location(){
    return this.form.get('pickup_location');
  }
  get pickup_location_type(){
    return this.form.get('pickup_location_type');
  }
  get delivery_location(){
    return this.form.get('delivery_location');
  }
  get delivery_location_type(){
    return this.form.get('delivery_location_type');
  }
  get package_type_weight(){
    return this.form.get('package_type_weight');
  }
  get package_type_length(){
    return this.form.get('package_type_length');
  }
  get package_type(){
    return this.form.get('package_type');
  }
  get package_type_height(){
    return this.form.get('business');
  }
  get package_type_quantity(){
    return this.form.get('package_type_quantity');
  }
  get package_type_width(){
    return this.form.get('package_type_width');
  }
  onSubmit(){
    
    if(!this.form.valid){
      if(this.pickup_location.hasError('required')){
        this.error_arr[0] = 'Please enter pickup location.';

      }else{
        this.error_arr[0] = '';
        
      }
      if(this.pickup_location_type.hasError('required')){
        this.error_arr[1] = 'Please select pickup location type.';

      }else{
        this.error_arr[1] = '';
        
      }
      if(this.delivery_location.hasError('required')){
        this.error_arr[2] = 'Please enter delivery location.';

      }else{
        this.error_arr[2] = '';
        
      }
      if(this.delivery_location_type.hasError('required')){
        this.error_arr[3] = 'Please select delivery location type.';

      }else{
        this.error_arr[3] = '';
        
      }
      if(this.package_type.hasError('required')){
        this.error_arr[4] = 'Please select package type.';

      }else{
        this.error_arr[4] = '';
        
      }
      if(this.package_type_weight.hasError('required')){
        this.error_arr[5] = 'Please enter package weight.';

      }else{
        this.error_arr[5] = '';
        
      }
      if(this.package_type_length.hasError('required')){
        this.error_arr[6] = 'Please enter package length.';

      }else{
        this.error_arr[6] = '';
        
      }
      if(this.package_type_height.hasError('required')){
        this.error_arr[7] = 'Please enter package height.';

      }else{
        this.error_arr[7] = '';
        
      }
      if(this.package_type_width.hasError('required')){
        this.error_arr[8] = 'Please enter package width.';

      }else{
        this.error_arr[8] = '';
        
      }
      if(this.package_type_quantity.hasError('required')){
        this.error_arr[9] = 'Please enter package quantity.';

      }else{
        this.error_arr[9] = '';
        
      }
      
    
    }else{
      
      
    }
  }

}
