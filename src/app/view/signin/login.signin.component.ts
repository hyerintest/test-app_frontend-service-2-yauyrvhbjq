import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FormBuilder } from '@angular/forms';

import {
  AuthService,
  AccountService,
  CommonService,
} from 'src/app/service';

@Component({
  selector: 'app-login-signin',
  templateUrl: 'login.signin.component.html',
  styleUrls: ['login.signin.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginSigninComponent {
  environment = environment;
  login: any = {
    id: '',
    password: ''
  };

  constructor(private authService: AuthService,
              private formBuilder: FormBuilder,
              private router: Router,
              private commonService: CommonService,
              private accountService: AccountService,
  ) {
  }
  async signIn() {
    const response = await this.commonService.request(this.accountService.account.signIn(this.login));
    const {sessionId, id} = response
    this.authService.token = sessionId;
    this.authService.doLogin(id, this.authService.token);
    this.routeAfterLogin();
  }

  routeAfterLogin(){
    this.router.navigate([environment.defaultPath]);
  }
}
