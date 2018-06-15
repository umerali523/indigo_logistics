import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { SignupComponent } from './modules/auth/components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MainLayoutComponent } from './layouts/main/main-layout.component';
import { CompanyLayoutComponent } from './layouts/company/company-layout.component';
import { Page404Component } from './shared/components/page404/page404.component';
import { CompanyListingComponent } from './components/company-listing/company-listing.component';
import { EmployeeListingComponent } from './components/employee-listing/employee-listing.component';
import { AuthGuard } from './core/guards/auth/auth.guard';
import { AccessAdminGuard } from './core/guards/admin/access.guard';
//import { AuthGuard } from './core/guards/auth.guard';



export const routes: Routes = [

  { path: '', component:AuthLayoutComponent , loadChildren:'./modules/auth/auth.module#AuthModule' },
  { path: 'company', component:CompanyLayoutComponent , loadChildren:'./modules/company/company.module#CompanyModule' },

  { path: 'indigo', component:MainLayoutComponent , 
    children:[
      {path:'',component:DashboardComponent , canActivate : [AuthGuard , AccessAdminGuard] },
      {path:'dashboard',component:DashboardComponent , canActivate : [AuthGuard , AccessAdminGuard] },
      {path:'add_company',component:SignupComponent  , canActivate : [AuthGuard , AccessAdminGuard] },
      {path:'add_employee',component:SignupComponent , canActivate : [AuthGuard , AccessAdminGuard] },
      {path:'companies_list',component:CompanyListingComponent , canActivate : [AuthGuard , AccessAdminGuard] },
      {path:'employees_list',component:EmployeeListingComponent , canActivate : [AuthGuard , AccessAdminGuard] },
    ]
  },

  // { path: 'dashboard', component:MainLayoutComponent , children:[{path:'',component:DashboardComponent}] },
  // { path: 'indigo/companies_listing', component:MainLayoutComponent , children:[{path:'',component:SignupComponent}] },
  // { path: 'indigo/employees_listing', component:MainLayoutComponent , children:[{path:'',component:SignupComponent}] },
  // { path: 'indigo/add_company', component:MainLayoutComponent , children:[{path:'',component:SignupComponent}] },
  // { path: 'indigo/add_employee', component:MainLayoutComponent , children:[{path:'',component:SignupComponent}] },
  { path: '**', component: Page404Component },
  
  

//   // { path: 'pms', component:PmsLayoutComponent , children:
//   //   [{path:'',component:PmsDashboardComponent , canActivate : [AuthGuard]}] },
//   //    { path: 'practices', component:PmsLayoutComponent , 
//   //      children:[
//   //       {path:'',component:PracticeComponent , canActivate : [AuthGuard]},
//   //       {path:'add',component:AddPracticeComponent , canActivate : [AuthGuard]}
//   //   ]
//   // },
//   // { path: 'locations', component:PmsLayoutComponent , 
//   //      children:[
//   //       {path:'',component:LocationsComponent , canActivate : [AuthGuard]},
//   //   ]
//   // },

//  { path:'**',redirectTo:'dashboard',pathMatch:'full'},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
