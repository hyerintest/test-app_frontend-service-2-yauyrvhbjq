import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {AuthService} from 'src/app/service/auth.service';
import {Observable} from 'rxjs';

@Injectable()
export class RouteActivate implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean {

    return true;

    // if (this.authService.token){
    //   return true;
    // } else{
    //   this.router.navigate(['/']);
    //   return false;
    // }
  }
}
