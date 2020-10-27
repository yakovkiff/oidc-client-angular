import { TestBed } from '@angular/core/testing';

import { AutoRedirectService } from './auto-redirect.service';

describe('AutoRedirectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutoRedirectService = TestBed.get(AutoRedirectService);
    expect(service).toBeTruthy();
  });
});
