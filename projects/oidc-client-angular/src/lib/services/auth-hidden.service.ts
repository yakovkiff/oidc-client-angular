import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'oidc-client';
import { BehaviorSubject } from 'rxjs';
import { AuthSettingsService } from './auth-settings.service';
import { AutoRedirectService } from './auto-redirect.service';

@Injectable({
  providedIn: 'root'
})
export class AuthHiddenService {

  userSubject = new BehaviorSubject(this.authSettingsService.user);
  userManager = this.authSettingsService.userManager;

  constructor(
    private authSettingsService: AuthSettingsService,
    private autoRedirectService: AutoRedirectService,
    private router: Router
  ) { }

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
