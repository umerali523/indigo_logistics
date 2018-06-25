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
import { ProfileComponent } from './profile/profile.component';
import { NgxTypeaheadModule } from 'ngx-typeahead';
import { AddressBookComponent } from './address-book/address-book.component';
import { AddAddressBookComponent } from './add-address-book/add-address-book.component';
import { QuotesComponent } from './quotes/quotes.component';
import { BookingsComponent } from './bookings/bookings.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { LineSeriesService, DateTimeService, DataLabelService,CategoryService,
  SplineSeriesService, ChartAnnotationService, LegendService, TooltipService, ChartModule, 
  
} from '@syncfusion/ej2-ng-charts';
import { ApplyForCreditComponent } from './apply-for-credit/apply-for-credit.component';
import { GetQuoteComponent } from './get-quote/get-quote.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule, 
    ReactiveFormsModule,
    SpinnerModule,
    SharedModule,
    Daterangepicker,
    NgxTypeaheadModule,
    ChartModule
  ],
  declarations: [
      DashboardComponent,
      ProfileComponent,
      AddressBookComponent,
      AddAddressBookComponent,
      QuotesComponent,
      BookingsComponent,
      InvoicesComponent,
      ApplyForCreditComponent,
      GetQuoteComponent,
    ],
  providers : [AccessCompanyGuard,LineSeriesService, DateTimeService, DataLabelService,CategoryService, 
    SplineSeriesService, ChartAnnotationService, LegendService, TooltipService, ]
})
export class CompanyModule { }
