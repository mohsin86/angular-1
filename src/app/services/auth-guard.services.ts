import {Injectable} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {AuthServices} from './auth.services';
import {Observable} from 'rxjs';

@Injectable()
export class AuthGuardServices implements CanActivate{
    constructor(public auth: AuthServices) {
    }

    // tslint:disable-next-line:max-line-length
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.auth.isAuthenticated();
    }
}
