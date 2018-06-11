import { NgModule } from "@angular/core";
import { SignupComponent } from "../../modules/auth/components/signup/signup.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SpinnerModule } from "angular2-spinner/dist";
import { Page404Component } from "../components/page404/page404.component";
import { ChangePasswordComponent } from "../components/change-password/change-password.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule, 
        ReactiveFormsModule,
        SpinnerModule,
     ],
    declarations: [
         SignupComponent,
         Page404Component,
         ChangePasswordComponent
    ],
    exports: [
        SignupComponent,
        Page404Component
    ]
})
  
export class SharedModule {}