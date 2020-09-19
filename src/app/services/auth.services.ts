import {Injectable} from '@angular/core';
import {UsersServices} from './users.services';
import {Router} from '@angular/router';

@Injectable()

export class AuthServices {
    private login = false;
    constructor(public usersServices: UsersServices, public route: Router) {}
    loginCheck(check): boolean {
        const userCheck = this.usersServices.getUsers().find(user =>  user.email === check.email) ;
        if (userCheck === undefined){
            this.login = false ;
            return false;
        }else {
            this.login = true ;
            this.route.navigate(['/users/dashboard'])
            return true;
        }
    }

    isAuthenticated(): boolean {
       return  this.login;
    }

}
