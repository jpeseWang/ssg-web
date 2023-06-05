import { Injectable } from '@angular/core';
import { ApiConfigService } from './api-config.service';

import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly apiConfigService: ApiConfigService) {}

  login(username: string, password: string) {
    return this.apiConfigService.post<any>('auth/login', {
      username,
      password,
    });
  }

  signup(username: string, password: string) {
    return this.apiConfigService.post<any>('auth/register', {
      username,
      password,
    });
  }

  setSession(data: any) {
    const expiresAt = moment().add(data.token.expiresIn, 'second');

    localStorage.setItem('id_token', data.token.accessToken);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
  }

  isLoggedIn() {
    const expiration = this.getExpiration();
    if (!expiration) {
      return false;
    }
    return moment().isBefore(expiration);
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    if (!expiration) {
      return null;
    }
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}
