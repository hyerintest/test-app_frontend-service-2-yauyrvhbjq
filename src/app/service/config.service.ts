import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ConfigService {
  private _apiPath: string = '';

  public get apiPath(): string {
    return this._apiPath;
  }
  public set apiPath(value: string) {
    this._apiPath = value;
  }
  config = {
    getConfigJSONFile: () => {
      return this.http.get("assets/config/config.json");
    }
  };

  constructor(private http: HttpClient) {
  }
}
