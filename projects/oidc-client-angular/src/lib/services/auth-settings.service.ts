import { Injectable } from '@angular/core';
import { Log, User, UserManager } from 'oidc-client';
import { AuthSettings } from '../models/auth-settings.model';

@Injectable({
  providedIn: 'root'
})
export class AuthSettingsService {

  userManager: UserManager;
  user: User;

  constructor() { }

  init(settings: AuthSettings): Promise<User> {
    if (!settings.userManagerSettings) {
      throw new Error('userManagerSettings not defined in AuthSettings.');
    }
    Log.logger = settings.logger;
    Log.level = settings.logLevel;
    this.userManager = new UserManager(settings.userManagerSettings);
    return this.userManager.getUser()
      .then(user => this.user = user);
  }
}
