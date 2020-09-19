import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms' ;
import {UsersServices} from '../../../services/users.services';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUPComponent implements OnInit {

  constructor(public usersServices: UsersServices) { }

  ngOnInit(): void {
  }

  singup(form: NgForm): void{
    const name = `${form.value.first_name} ${form.value.last_name}`;
    const email = form.value.email;
    const password = form.value.password;
    const cPassword = form.value.cpassword;

    this.usersServices.setUsers(
        {
          id: Math.max.apply(Math, this.usersServices.getUsers().map(user => user.id)),
          name, status: 'Enable', email, password
        }
    );
    console.log(this.usersServices.getUsers());
  }

}
