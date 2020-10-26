import { UserManagerSettings } from 'oidc-client';
import { LogLevel } from '../enums/log-level.enum';
import { Logger } from '../logging/logger';
import { NoopLogger } from '../logging/noop-logger';

export class AuthSettings {
    logLevel = LogLevel.None;
    logger: Logger = new NoopLogger();
    userManagerSettings: UserManagerSettings;
}
