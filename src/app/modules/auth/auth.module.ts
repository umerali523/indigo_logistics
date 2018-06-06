import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthRoutes as routes } from './auth.routing';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SpinnerModule } from 'angular2-spinner/dist';
import { AuthService } from '../../core/services/auth-service.service';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule, 
    ReactiveFormsModule,
    SpinnerModule,
    
  ],
  declarations: [LoginComponent, SignupComponent, ForgetPasswordComponent, ResetPasswordComponent],
  providers : [AuthService]
})
export class AuthModule { }
