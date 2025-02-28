import { Injectable } from '@angular/core';
import { user } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class CrudService {


  private _users: user[] = [];

  constructor () {
    this.addUser({
      id: 0,
      name: 'Quentin',
      birthdate: new Date('1996-04-03'),
      series: ['The Walking Dead', 'La Casa de Papel']
    });
  }

  getUsers (): user[] {
    return this._users;
  }

  getUserById (id: number): user | null {
    return this._users.find(u => u.id === id) ?? null;
  }

  addUser (u: user): void {

    let lastuser: user | undefined = this._users.length > 0 ? this._users.sort(x => x.id).reverse()[0] : undefined;
    let newid: number = lastuser ? lastuser?.id + 1 : 0;
    this._users.push({
      ...u,
      id: newid
    });
  }

  updateUser (id: number, newUser: user) {
    const user = this.getUserById(id);
    if (user) {
      this._users[user.id].name = newUser.name;
      this._users[user.id].birthdate = newUser.birthdate;
      this._users[user.id].series = newUser.series;
    }
  }

  removeUser (id: number): void {
    this._users.splice(id, 1);
  }
}
