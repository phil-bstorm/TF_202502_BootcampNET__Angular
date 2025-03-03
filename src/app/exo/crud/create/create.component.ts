import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-create',
  standalone: false,
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {


  form : FormGroup;

  /**
   *
   */
  constructor(private _formBuilder : FormBuilder, private _crudService : CrudService, private _router : Router) {

    this.form = _formBuilder.group({
      name : [null, Validators.required],
      birthdate : [null, Validators.required],
      series : this._formBuilder.array([])
    })

  }

  getArray(){
    return this.form.get("series") as FormArray
  }

  addToArray(){
    return this.getArray().push(new FormControl(null, Validators.required))
  }

  removeToArray(index : number){
    this.getArray().removeAt(index)
  }

  submit(){
    if (this.form.valid) {
      this._crudService.addUser(this.form.value)
      this._router.navigate(["exo", "crud"])
    }
    else{
      console.log("invalide");

    }
  }

}
