import { NgModule } from "@angular/core";
import { SignupComponent } from "../../modules/auth/components/signup/signup.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SpinnerModule } from "angular2-spinner/dist";
import { Page404Component } from "../components/page404/page404.component";
import { ChangePasswordComponent } from "../components/change-password/change-password.component";
import { NgxTypeaheadModule } from 'ngx-typeahead';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { HttpConfig } from "../../core/services/httpconfig.interceptor";
import { CompanyService } from "../../core/services/company-service.service";


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule, 
        ReactiveFormsModule,
        SpinnerModule,
        NgxTypeaheadModule
        
     ],
    declarations: [
         SignupComponent,
         Page404Component,
         ChangePasswordComponent
    ],
    providers: [CompanyService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpConfig,
          multi: true
        }
      ],
    exports: [
        SignupComponent,
        Page404Component
    ]
})
  
export class SharedModule {}