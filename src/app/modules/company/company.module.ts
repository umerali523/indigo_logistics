import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyRoutes as routes } from './company.routing';
import { RouterModule, RouterStateSnapshot } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SpinnerModule } from 'angular2-spinner/dist';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../../shared/modules/shared.module';
import { Daterangepicker } from 'ng2-daterangepicker';
import { AccessCompanyGuard } from '../../core/guards/company/access.guard';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule, 
    ReactiveFormsModule,
    SpinnerModule,
    SharedModule,
    Daterangepicker,
  ],
  declarations: [
      DashboardComponent,
    ],
  providers : [AccessCompanyGuard]
})
export class CompanyModule { }
