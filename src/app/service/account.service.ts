import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {ConfigService} from "./config.service";
@Injectable()
export class AccountService {
  account = {
    signIn:  (param: any) => {
      return this.http.post(`${environment.api.account}${this.configService.apiPath}${environment.apiPath}/login`, param);
    },
  };

  constructor(private http: HttpClient,
              private configService: ConfigService) {
  }
}
