import { TestBed } from '@angular/core/testing';

import { OidcClientAngularService } from './oidc-client-angular.service';

describe('OidcClientAngularService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OidcClientAngularService = TestBed.get(OidcClientAngularService);
    expect(service).toBeTruthy();
  });
});
