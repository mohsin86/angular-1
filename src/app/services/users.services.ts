import {Injectable} from '@angular/core';

@Injectable()

export class UsersServices {
   users = [
        {id: 1, name: 'max', status: 'Enable', email: 'max@test.com', password: '123456' },
        {id: 2, name: 'Jad', status: 'Disable' , email: 'jad@test.com', password: '123456'},
        {id: 3, name: 'Tod', status: 'Unknown' , email: 'tod@test.com', password: '123456'},
        {id: 4, name: 'Angel', status: 'Enable' , email: 'angel@test.com', password: '123456'},
    ];

    getUsers(): Array<{id: number, name: string, status: string, email: string, password: string}> {
        return this.users;
    }

    setUsers(users): void {
        this.users.push(users);
    }
}