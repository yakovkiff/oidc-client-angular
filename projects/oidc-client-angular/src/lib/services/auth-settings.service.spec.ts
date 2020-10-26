import { TestBed } from '@angular/core/testing';

import { AuthSettingsService } from './auth-settings.service';

describe('AuthSettingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthSettingsService = TestBed.get(AuthSettingsService);
    expect(service).toBeTruthy();
  });
});
