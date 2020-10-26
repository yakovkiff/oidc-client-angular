import { Logger } from './logger';

export class NoopLogger implements Logger {

  constructor() { }

  debug(args: any[]): void { }
  info(args: any[]): void { }
  warn(args: any[]): void { }
  error(args: any[]): void { }
}
