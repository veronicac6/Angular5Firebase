import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { User } from './user.model';

@Injectable()
export class UsersService {
  usersList: AngularFireList<any>;
  selectedUser: User = new User();
  constructor(private firebase: AngularFireDatabase) { }

  getData() {
    this.usersList = this.firebase.list('users');
    return this.usersList;
  }

  insertUser(user: User) {
    this.usersList.push({
      email: user.email,
      name: user.name
    });
  }

  updateUser(user: User) {
    this.usersList.update(user.$key, {
      email: user.email,
      name: user.name
    });
  }

  deleteUser($key: string) {
    this.usersList.remove($key);
  }

}
