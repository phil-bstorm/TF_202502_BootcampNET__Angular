import { Component } from '@angular/core';
import { user } from '../models/user.interface';
import { CrudService } from '../services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  users : user[];

  constructor(private _crudservice : CrudService, private _router : Router){
    this.users = _crudservice.getUsers()
  }

  toCreate(){
    this._router.navigate(["exo", "crud", "create"])
  }

}
