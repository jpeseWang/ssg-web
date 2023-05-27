import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const AUTH_ROUTE: Route[] = [
  {
    path: '',
    pathMatch: 'prefix',
    redirectTo: 'login',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  /* {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
      }, */
];

@NgModule({
  imports: [RouterModule.forChild(AUTH_ROUTE)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
