import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'oidc-client';
import { Observable } from 'rxjs';
import { AuthHiddenService } from './auth-hidden.service';
import { AuthSettingsService } from './auth-settings.service';
import { AutoRedirectService } from './auto-redirect.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User>;
  userManager = this.authSettingsService.userManager;

  constructor(
    private authSettingsService: AuthSettingsService,
    private autoRedirectService: AutoRedirectService,
    private authHiddenService: AuthHiddenService
  ) {
    this.user$ = this.authHiddenService.userSubject.asObservable();
  }

  get userSnapshot(): User {
    return this.authHiddenService.userSubject.value;
  }

  setAuthHeaders(user: User, headers: HttpHeaders): HttpHeaders {
    const params = ['Authorization', user.token_type + ' ' + user.access_token];
    headers = headers.set(params[0], params[1]);
    return headers;
  }

  signoutRedirect(): Promise<void> {
    return this.userManager.signoutRedirect();
  }

  signinRedirect(): Promise<void> {
    this.autoRedirectService.set(location.href.substring(location.origin.length));
    return this.userManager.signinRedirect();
  }
}
