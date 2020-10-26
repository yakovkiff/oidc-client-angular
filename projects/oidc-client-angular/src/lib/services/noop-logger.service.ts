import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class NoopLoggerService implements LoggerService {

  constructor() { }

  debug(args: any[]): void { }
  info(args: any[]): void { }
  warn(args: any[]): void { }
  error(args: any[]): void { }
}
