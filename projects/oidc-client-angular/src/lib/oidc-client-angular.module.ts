import { NgModule } from '@angular/core';
import { AuthComponent } from './components/auth/auth.component';
import { SilentRenewComponent } from './components/silent-renew/silent-renew.component';



@NgModule({
  declarations: [AuthComponent, SilentRenewComponent],
  imports: [
  ],
  exports: [AuthComponent, SilentRenewComponent]
})
export class OidcClientAngularModule { }
