import { TestBed } from '@angular/core/testing';

import { AuthHiddenService } from './auth-hidden.service';

describe('AuthHiddenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthHiddenService = TestBed.get(AuthHiddenService);
    expect(service).toBeTruthy();
  });
});
