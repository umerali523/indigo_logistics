import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { SpinnerModule } from 'angular2-spinner/dist';


import { NAV_DROPDOWN_DIRECTIVES } from './shared/directives/nav-dropdown.directive';
import { BreadcrumbsComponent } from './shared/components/breadcrumb.component';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/directives/sidebar.directive';
import { AsideToggleDirective } from './shared/directives/aside.directive';

import { CommonModule } from '@angular/common';
import {NgxMaskModule} from 'ngx-mask'
import { SharedService } from './shared/services/shared.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppNavbarComponent } from './layouts/components/app-navbar/app-navbar.component';
import { MainLayoutComponent } from './layouts/main/main-layout.component';
import { HttpConfig } from './core/services/httpconfig.interceptor';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SharedModule } from './shared/modules/shared.module';
import { AuthService } from './core/services/auth-service.service';
import { CompanyLayoutComponent } from './layouts/company/company-layout.component';
import { AppSidebarComponent } from './layouts/components/app-sidebar/app-sidebar.component';
import { AdminService } from './core/services/admin-service.service';
import { CompanyListingComponent } from './components/company-listing/company-listing.component';
import { EmployeeListingComponent } from './components/employee-listing/employee-listing.component';
import { AuthGuard } from './core/guards/auth/auth.guard';
import { LogGuard } from './core/guards/auth/loggedIn.guard';
import { AccessAdminGuard } from './core/guards/admin/access.guard';




@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    NAV_DROPDOWN_DIRECTIVES,
    BreadcrumbsComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective,
    DashboardComponent,
    AppNavbarComponent,
    MainLayoutComponent,
    CompanyLayoutComponent,
    AppSidebarComponent,
    CompanyListingComponent,
    EmployeeListingComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    BrowserModule,
    RouterModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    SpinnerModule,
    CommonModule,
    NgxMaskModule.forRoot(),
    SharedModule,
  ],
  providers: [SharedService,AuthService,AdminService,AuthGuard , AccessAdminGuard
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: HttpConfig,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
