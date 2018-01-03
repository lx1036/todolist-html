import { Component, OnInit } from '@angular/core';
import {AuthService} from '../core/auth.service';
import {Router} from '@angular/router';
import {Auth} from '../todo/models/entities';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService, ],
})
export class LoginComponent implements OnInit {
  private username: string;
  private password: string;
  auth: Auth;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(formValue) {
    this.authService.loginWithCredentials(formValue.login.username, formValue.login.password).then(auth => {
      const redirectUrl = (auth.redirectUrl === null) ? '/' : auth.redirectUrl;

      if (!auth.hasError) {
        this.router.navigate([redirectUrl]);
        localStorage.removeItem('redirectUrl');
      } else {
        this.auth = Object.assign({}, auth);
      }
    });
  }
}
