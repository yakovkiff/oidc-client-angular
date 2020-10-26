import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'lib-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.userManager.signinRedirectCallback().then(user => {
      this.authService.userSubject.next(user);
      // const url = this.redirectUrlStorageService.get();
      // if (!url || !url.length) {
      //   this.router.navigate(['']);
      // }
      // this.router.navigateByUrl(url);
      this.router.navigate(['']);
    });
  }

}
