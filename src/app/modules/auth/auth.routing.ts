import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";
import { ForgetPasswordComponent } from "./components/forget-password/forget-password.component";
import { ResetPasswordComponent } from "./components/reset-password/reset-password.component";


export const AuthRoutes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'register', component: SignupComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgetPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
];
