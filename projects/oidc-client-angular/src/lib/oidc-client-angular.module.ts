import { NgModule } from '@angular/core';
import { AuthComponent } from './components/auth/auth.component';
import { SilentRenewComponent } from './components/silent-renew/silent-renew.component';
import { OidcClientAngularComponent } from './oidc-client-angular.component';



@NgModule({
  declarations: [OidcClientAngularComponent, AuthComponent, SilentRenewComponent],
  imports: [
  ],
  exports: [OidcClientAngularComponent, AuthComponent, SilentRenewComponent]
})
export class OidcClientAngularModule { }
