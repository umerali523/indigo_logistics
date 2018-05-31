import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { SignupComponent } from './modules/auth/components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { MainLayoutComponent } from './layouts/main/main-layout.component';
//import { AuthGuard } from './core/guards/auth.guard';



export const routes: Routes = [

  { path: '', component:AuthLayoutComponent , loadChildren:'./modules/auth/auth.module#AuthModule' },

  { path: 'dashboard', component:MainLayoutComponent , children:[{path:'',component:DashboardComponent}] },

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
