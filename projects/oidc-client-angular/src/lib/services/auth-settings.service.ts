import { Injectable } from '@angular/core';
import { Log, User, UserManager } from 'oidc-client';
import { LogLevel } from '../enums/log-level.enum';
import { NoopLogger } from '../logging/noop-logger';
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
    if (!settings.logger) {
      settings.logger = new NoopLogger();
    }
    if (!settings.logLevel) {
      settings.logLevel = LogLevel.None;
    }
    Log.logger = settings.logger;
    Log.level = settings.logLevel;
    this.userManager = new UserManager(settings.userManagerSettings);
    return this.userManager.getUser()
      .then(user => this.user = user);
  }
}
