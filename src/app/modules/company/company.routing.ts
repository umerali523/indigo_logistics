import { DashboardComponent } from "./dashboard/dashboard.component";
import { Page404Component } from "../../shared/components/page404/page404.component";
import { ChangePasswordComponent } from "../../shared/components/change-password/change-password.component";

export const CompanyRoutes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'change_password', component: ChangePasswordComponent },
    { path: '**', component: Page404Component },
    

];
