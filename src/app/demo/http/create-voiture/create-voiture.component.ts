import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Voiture } from '../models/voiture.model';
import { VoitureService } from '../services/voiture.service';

@Component({
  selector: 'app-create-voiture',
  standalone: false,
  templateUrl: './create-voiture.component.html',
  styleUrl: './create-voiture.component.scss'
})
export class CreateVoitureComponent {

  voiture!: Voiture;
    form!: FormGroup;
  
    private _voitureService: VoitureService = inject(VoitureService);
    private _fb: FormBuilder = inject(FormBuilder);
    private _router: Router = inject(Router);
  
    ngOnInit (): void {
      this.form = this._fb.group({
        marque: [null, [Validators.required, Validators.minLength(2)]],
        modele: [null, [Validators.required, Validators.minLength(2)]],
        prix: [null, [Validators.required, Validators.min(0)]],
        couleur: [null, []],
      });
    }
  
    onSubmit() {
      console.log('this.form.valid :>> ', this.form.valid);
      console.log('this.form.value :>> ', this.form.value);
  
      if (this.form.invalid) return;
  
      console.log("Mise à jour des données");
  
      this._voitureService.create(this.form.value)
        .subscribe(() => this._router.navigate(['demo', 'http-client']));
    }

}
