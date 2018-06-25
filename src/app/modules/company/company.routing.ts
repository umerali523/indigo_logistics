import { DashboardComponent } from "./dashboard/dashboard.component";
import { Page404Component } from "../../shared/components/page404/page404.component";
import { ChangePasswordComponent } from "../../shared/components/change-password/change-password.component";
import { AuthGuard } from "../../core/guards/auth/auth.guard";
import { AccessCompanyGuard } from "../../core/guards/company/access.guard";
import { ProfileComponent } from "./profile/profile.component";
import { AddressBookComponent } from "./address-book/address-book.component";
import { AddAddressBookComponent } from "./add-address-book/add-address-book.component";
import { BookingsComponent } from "./bookings/bookings.component";
import { QuotesComponent } from "./quotes/quotes.component";
import { ApplyForCreditComponent } from "./apply-for-credit/apply-for-credit.component";
import { InvoicesComponent } from "./invoices/invoices.component";
import { GetQuoteComponent } from "./get-quote/get-quote.component";

export const CompanyRoutes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent , canActivate : [AuthGuard , AccessCompanyGuard] },
    { path: 'change_password', component: ChangePasswordComponent , canActivate : [AuthGuard , AccessCompanyGuard] },
    { path: 'profile', component: ProfileComponent , canActivate : [AuthGuard , AccessCompanyGuard] },
    { path: 'address_book', component: AddressBookComponent , canActivate : [AuthGuard , AccessCompanyGuard] },
    { path: 'my_bookings', component: BookingsComponent , canActivate : [AuthGuard , AccessCompanyGuard] },
    { path: 'my_quotes', component: QuotesComponent , canActivate : [AuthGuard , AccessCompanyGuard] },
    { path: 'my_invoices', component: InvoicesComponent , canActivate : [AuthGuard , AccessCompanyGuard] },
    { path: 'add_address_book', component: AddAddressBookComponent , canActivate : [AuthGuard , AccessCompanyGuard] },
    { path: 'apply_for_credit', component: ApplyForCreditComponent , canActivate : [AuthGuard , AccessCompanyGuard] },
    { path: 'get_quote', component: GetQuoteComponent , canActivate : [AuthGuard , AccessCompanyGuard] },
    { path: '**', component: Page404Component },
    

];
