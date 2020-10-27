import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserManager } from 'oidc-client';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthSettingsService } from './auth-settings.service';
import { AutoRedirectService } from './auto-redirect.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject: BehaviorSubject<User>;

  user$: Observable<User>;
  userManager: UserManager;

  constructor(
    private authSettingsService: AuthSettingsService,
    private autoRedirectService: AutoRedirectService,
    private router: Router
  ) {
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

  signoutRedirect(): Promise<void> {
    return this.userManager.signoutRedirect();
  }

  signinRedirect(): Promise<void> {
    this.autoRedirectService.set(location.href.substring(location.origin.length));
    return this.userManager.signinRedirect();
  }

  signinRedirectCallback(): Promise<User> {
    return this.userManager.signinRedirectCallback().then(user => {
      this.userSubject.next(user);
      const url = this.autoRedirectService.get();
      if (url && url.length) {
        this.router.navigateByUrl(url);
        this.autoRedirectService.clear();
      } else {
        this.router.navigate(['']);
      }
      return user;
    });
  }

  signinSilentCallback(): Promise<User> {
    return this.userManager.signinSilentCallback()
      .then(user => {
        this.userSubject.next(user);
        return user;
      });
  }
}
