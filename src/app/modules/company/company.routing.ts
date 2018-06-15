import { DashboardComponent } from "./dashboard/dashboard.component";
import { Page404Component } from "../../shared/components/page404/page404.component";
import { ChangePasswordComponent } from "../../shared/components/change-password/change-password.component";
import { AuthGuard } from "../../core/guards/auth/auth.guard";
import { AccessCompanyGuard } from "../../core/guards/company/access.guard";

export const CompanyRoutes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent , canActivate : [AuthGuard , AccessCompanyGuard] },
    { path: 'change_password', component: ChangePasswordComponent , canActivate : [AuthGuard , AccessCompanyGuard] },
    { path: '**', component: Page404Component },
    

];
