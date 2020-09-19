import {Component, OnInit, ViewChild} from '@angular/core';
import {UsersServices} from '../../../services/users.services';
import {NgForm} from '@angular/forms' ;
import {AuthServices} from '../../../services/auth.services';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  msg = false;
  constructor(public usersServices: UsersServices, public auth: AuthServices) { }
  @ViewChild('ngForm') form: NgForm
  ngOnInit(): void {
  }


  login(form: NgForm): void {
    //
    console.dir(this.usersServices.getUsers());
    const email = form.value.email;
    const password = form.value.password;
    const check = this.auth.loginCheck({email, password}) ;
    if (!check){
      console.log('Failed!!');
      this.msg = true;
    }else {
      this.msg = false;
    }
  }
}
