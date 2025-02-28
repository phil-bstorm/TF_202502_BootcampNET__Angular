import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { genre } from './enums/genre.enum';
import { artisteValidator } from './validators/artiste.validator';
import { ConfirmPasswordValidator } from './validators/confirm-password.validator';

@Component({
  selector: 'app-formulaire',
  standalone: false,
  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.scss'
})
export class FormulaireComponent {

  message! : string | undefined;

  form! : FormGroup;

  //recupere l'enum genre et ne prend que les key values
  genreList : any[] = Object.entries(genre).filter(x => !isNaN(Number(x[0])))

  constructor(private _formbuilder : FormBuilder) {

    let dateActuel : Date = new Date();

    this.form = this._formbuilder.group({
      titre : [null, [Validators.required, Validators.minLength(5)]],
      annee : [dateActuel.getFullYear(), [Validators.required, Validators.min(1600), Validators.max(dateActuel.getFullYear())]],
      genre : [null , [Validators.required]],
      artistes : this._formbuilder.array([new FormControl(null, artisteValidator)]),
      password: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required]],
    }, { validators: [ConfirmPasswordValidator] })
  }

  getArray() : FormArray {
    return this.form.get('artistes') as FormArray
  }

  addControl() : void{
    this.getArray().push(new FormControl(null, artisteValidator))
  }

  removeControl(index : number) : void{
    this.getArray().removeAt(index)
  }

  submit(){
    this.message = undefined
    if (this.form.valid) {
      this.message = "Formulaire valide"

    }
    else{
      this.message = "Formulaire invalide"
    }
  }

}
