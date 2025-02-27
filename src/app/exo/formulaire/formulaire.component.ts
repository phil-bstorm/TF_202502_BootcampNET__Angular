import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  standalone: false,
  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.scss'
})
export class FormulaireComponent {

  // Formulaire d’inscription => Nom, prénom, email , password
  // Tout est requis, le format de l’email et du PWD sont géré par un pattern Regex
  // Pwd 8Char, Min Maj nombre, char spécial
  // Si invalide afficher en rouge => Formulaire invalide
  // Si valide afficher en Vert => Bienvenue


  form : FormGroup;

  errorMessage : string | undefined;

  successMessage : string | undefined;

  emailRegex : RegExp = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/

  passwordRegex : RegExp = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/

  constructor(private _formbuilder : FormBuilder) {

    this.form = this._formbuilder.group({
      nom : [null, Validators.required],
      prenom : [null, Validators.required],
      email : [null, [Validators.required, Validators.pattern(this.emailRegex)]],
      password : [null, [Validators.required, Validators.pattern(this.passwordRegex)]]
    })

  }

  submit(){

    this.errorMessage = undefined
    this.successMessage = undefined

    if (this.form.valid) {
      this.successMessage = "Bienvenue"
    }
    else{
      this.errorMessage = "Formulaire invalide"
    }

  }

}
