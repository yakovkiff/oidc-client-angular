import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OidcClientAngularComponent } from './oidc-client-angular.component';

describe('OidcClientAngularComponent', () => {
  let component: OidcClientAngularComponent;
  let fixture: ComponentFixture<OidcClientAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OidcClientAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OidcClientAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
