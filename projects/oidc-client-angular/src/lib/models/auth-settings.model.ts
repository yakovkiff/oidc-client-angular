import { UserManagerSettings } from 'oidc-client';
import { LogLevel } from '../enums/log-level.enum';
import { LoggerService } from '../services/logger.service';
import { NoopLoggerService } from '../services/noop-logger.service';

export class AuthSettings {
    logLevel = LogLevel.None;
    logger: LoggerService = new NoopLoggerService();
    userManagerSettings: UserManagerSettings;
}
