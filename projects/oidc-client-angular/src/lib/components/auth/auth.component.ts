import { Component, OnInit } from '@angular/core';
import { AuthHiddenService } from '../../services/auth-hidden.service';

@Component({
  selector: 'lib-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(
    private authService: AuthHiddenService,
  ) { }

  ngOnInit() {
    this.authService.signinRedirectCallback();
  }

}
