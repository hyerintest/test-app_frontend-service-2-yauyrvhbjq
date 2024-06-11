import {Injectable} from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Location} from '@angular/common';
import {map, catchError} from 'rxjs/operators';
import {Router} from '@angular/router';
import {environment} from 'src/environments/environment';
import {AuthService} from 'src/app/service/auth.service';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  constructor(
    public authService: AuthService,
    public location: Location,
    private router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.token;
    if (token) {
      request = request.clone({headers: request.headers.set(environment.accessTokenHeaderKey, token)});
    }

    request = request.clone({headers: request.headers.set('Content-Type', 'application/json')});
    return next.handle(request).pipe(map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          if (event.body.hasOwnProperty(environment.accessTokenHeaderKey)) {
            this.authService.token = event.body[environment.accessTokenHeaderKey];
          }
          if (event.url) {
            const queryParams = new URLSearchParams(event.url);
            let code: any = '';
            if (queryParams.has('code')) {
              code = queryParams.get('code');
              this.authService.code = code;
            }
          }
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        switch (error.status) {
          case 401:
          case 403:
            this.router.navigate(['/'], {queryParams: {}});
        }
        return throwError(error);
      })
    );
  }
}
