import {Injectable} from '@angular/core';
import {RESPONSE, RESPONSE_CODE} from 'src/app/model/common/http.response';

@Injectable()
export class CommonService {
  constructor() {
  }

  request(http: any): Promise<any> {
    return new Promise((resolve, reject) => {
      http.subscribe({
        next: (res: any) => {
          const response = res as RESPONSE;
          if (response.statusCode === RESPONSE_CODE.OK || response.status === RESPONSE_CODE.OK || response.success) {
            resolve(response.result);
          } else {
            console.log(response);
          }
        },
        error: (error: any) => {
          console.log(error);
        },
      }).add(() => {
        // .
      });
    });
  }

  requestCallback(http: any): Promise<any> {
    return new Promise((resolve, reject) => {
      console.log(http)
      http.subscribe({
        next: (res: any) => {
          resolve(res);
        },
        error: (error: any) => {
          console.log(error);
        },
      }).add(() => {
        // .
      });
    });
  }
}
