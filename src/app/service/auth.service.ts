import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
  private _token: string = '';
  private userInfo: any = null;
  private _code: string = '';

  public get token(): string {
    return this._token;
  }
  public set token(value: string) {
    this._token = value;
  }

  public get code(): string {
    return this._code;
  }
  public set code(value: string) {
    this._code = value;
  }

  constructor(private router: Router) {
  }

  logout() {
    this.router.navigate(['/']);
  }

  doLogin(user: any, token: string) {
    this.userInfo = user;
    this.token = token;
  }

}
