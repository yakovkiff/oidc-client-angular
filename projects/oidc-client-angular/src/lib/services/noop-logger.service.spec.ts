import { TestBed } from '@angular/core/testing';

import { NoopLoggerService } from './noop-logger.service';

describe('NoopLoggerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NoopLoggerService = TestBed.get(NoopLoggerService);
    expect(service).toBeTruthy();
  });
});
