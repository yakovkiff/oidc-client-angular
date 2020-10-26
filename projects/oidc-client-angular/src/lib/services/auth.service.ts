import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, UserManager } from 'oidc-client';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthSettingsService } from './auth-settings.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userManager: UserManager;
  userSubject: BehaviorSubject<User>;
  user$: Observable<User>;

  constructor(private authSettingsService: AuthSettingsService) {
    this.userSubject = new BehaviorSubject(this.authSettingsService.user);
    this.user$ = this.userSubject.asObservable();
    this.userManager = this.authSettingsService.userManager;
  }

  get userSnapshot(): User {
    return this.userSubject.value;
  }

  setAuthHeaders(user: User, headers: HttpHeaders): HttpHeaders {
    const params = ['Authorization', user.token_type + ' ' + user.access_token];
    headers = headers.set(params[0], params[1]);
    return headers;
  }

  logout(): void {
    // this.redirectUrlStorageService.clear();
    this.userManager.signoutRedirect();
  }

  // navigateToOauthLogin(): void {
  //   this.userManager.signinRedirect();
  // }

}
