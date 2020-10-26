import { Injectable } from '@angular/core';

@Injectable()
export abstract class LoggerService {
  debug: (args: any[]) => void;
  info: (args: any[]) => void;
  warn: (args: any[]) => void;
  error: (args: any[]) => void;
}
