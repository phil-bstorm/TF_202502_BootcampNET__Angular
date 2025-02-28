import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { user } from '../models/user.interface';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {


  users: user[];

  constructor (private _crudservice: CrudService, private _router: Router) {
    this.users = _crudservice.getUsers();
  }

  toCreate () {
    this._router.navigate(["exo", "crud", "create"]);
  }

  toDetails (id: number) {
    this._router.navigate(["exo", "crud", id]);
  }

  toRemove (id: number) {
    if (confirm("Voulez-vous supprimer ?")) this._crudservice.removeUser(id);
  }

  toUpdate (id: number) {
    this._router.navigate(["exo", "crud", "update", id]);
  }

}
