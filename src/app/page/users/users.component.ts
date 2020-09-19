import { Component, OnInit } from '@angular/core';
import {UsersServices} from '../../services/users.services'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Array<{id: number, name: string, status: string, email: string, password: string}>;
  constructor(public usersServices: UsersServices) { }

  ngOnInit(): void {
    this.users = this.usersServices.getUsers();
  }

}
