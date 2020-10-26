import { UserManagerSettings } from 'oidc-client';
import { LogLevel } from '../enums/log-level.enum';
import { Logger } from '../logger';
import { NoopLogger } from '../noop-logger';

export class AuthSettings {
    logLevel = LogLevel.None;
    logger: Logger = new NoopLogger();
    userManagerSettings: UserManagerSettings;
}
