import { NgModule } from "@angular/core";
import { SignupComponent } from "../../modules/auth/components/signup/signup.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SpinnerModule } from "angular2-spinner/dist";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule, 
        ReactiveFormsModule,
        SpinnerModule,
     ],
    declarations: [
         SignupComponent
    ],
    exports: [
        SignupComponent
    ]
})
  
export class SharedModule {}