import { formatDate } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { user } from '../models/user.interface';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-update',
  standalone: false,
  templateUrl: './update.component.html',
  styleUrl: './update.component.scss'
})
export class UpdateComponent implements OnInit {

  user!: user | null;
  form!: FormGroup;

  router: Router = inject(Router);
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  crudService: CrudService = inject(CrudService);
  _formBuilder: FormBuilder = inject(FormBuilder);

  ngOnInit (): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.user = this.crudService.getUserById(+id);

    console.log(this.user);

    if (!this.user) this.router.navigate(["exo", "crud"]);

    this.form = this._formBuilder.group({
      name: [this.user!.name, Validators.required],
      birthdate: [formatDate(this.user!.birthdate, 'yyyy-MM-dd', 'en-EN'), Validators.required],
      series: this._formBuilder.array([])
    });

    this.user!.series.forEach(serie => {
      this.addToArray(serie);
    });

  }

  getArray () {
    return this.form.get("series") as FormArray;
  }

  addToArray (defaultValue: string | null = null) {
    return this.getArray().push(new FormControl(defaultValue ?? null, Validators.required));
  }

  removeToArray (index: number) {
    this.getArray().removeAt(index);
  }

  submit () {
    if (this.form.valid) {
      this.crudService.updateUser(+this.user!.id, this.form.value);
      this.router.navigate(["exo", "crud"]);
    }
    else {
      console.log("invalide");
    }
  }
}
