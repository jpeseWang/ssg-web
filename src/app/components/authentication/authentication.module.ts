import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

const AUTH_ROUTE: Route[] = [
  {
    path: '',
    redirectTo: 'login',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: SignupComponent,
  },
  /* {
      path: 'forgot-password',
      component: ForgotPasswordComponent,
    }, */
];

@NgModule({
  declarations: [SignupComponent, LoginComponent],
  imports: [CommonModule, RouterModule.forChild(AUTH_ROUTE), FormsModule],
  exports: [SignupComponent, LoginComponent, RouterModule],
})
export class AuthenticationModule {}
