import { Injectable } from '@angular/core';
import { user } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private _users : user[] = []

  constructor() { }

  getUsers(){
    return this._users;
  }

  addUser(u : user){

    let lastuser : user |undefined = this._users.length > 0 ? this._users.sort(x => x.id).reverse()[0] : undefined
    let newid : number = lastuser ? lastuser?.id + 1 : 0
    this._users.push({
      ...u,
      id : newid
    })
  }
}
