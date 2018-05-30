import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";


export const AuthRoutes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'register', component: SignupComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
];
