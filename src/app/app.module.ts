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

//import { AuthGuard } from './core/guards/auth.guard';

import { NAV_DROPDOWN_DIRECTIVES } from './shared/directives/nav-dropdown.directive';
import { BreadcrumbsComponent } from './shared/components/breadcrumb.component';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/directives/sidebar.directive';
import { AsideToggleDirective } from './shared/directives/aside.directive';

import { CommonModule } from '@angular/common';
import {NgxMaskModule} from 'ngx-mask'
import { SharedService } from './shared/services/shared.service';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { AppNavbarComponent } from './layouts/components/app-navbar/app-navbar.component';
import { MainLayoutComponent } from './layouts/main/main-layout.component';
import { HttpConfig } from './core/services/httpconfig.interceptor';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SignupComponent } from './modules/auth/components/signup/signup.component';
import { SharedModule } from './shared/modules/shared.module';
import { AuthService } from './core/services/auth-service.service';




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
    SharedModule
  ],
  providers: [SharedService,AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfig,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
