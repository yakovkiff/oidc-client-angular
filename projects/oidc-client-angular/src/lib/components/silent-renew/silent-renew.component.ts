import { Component, OnInit } from '@angular/core';
import { AuthHiddenService } from '../../services/auth-hidden.service';

@Component({
  selector: 'lib-silent-renew',
  templateUrl: './silent-renew.component.html',
  styleUrls: ['./silent-renew.component.css']
})
export class SilentRenewComponent implements OnInit {

  constructor(private authService: AuthHiddenService) { }

  ngOnInit() {
    this.authService.signinSilentCallback();
  }

}
