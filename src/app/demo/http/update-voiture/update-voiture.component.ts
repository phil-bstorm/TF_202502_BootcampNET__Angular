import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Voiture } from '../models/voiture.model';
import { VoitureService } from '../services/voiture.service';

@Component({
  selector: 'app-update-voiture',
  standalone: false,
  templateUrl: './update-voiture.component.html',
  styleUrl: './update-voiture.component.scss'
})
export class UpdateVoitureComponent implements OnInit {

  voiture!: Voiture;
  form!: FormGroup;

  private _voitureService: VoitureService = inject(VoitureService);
  private _activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private _fb: FormBuilder = inject(FormBuilder);

  ngOnInit (): void {
    this.form = this._fb.group({
      marque: [null, [Validators.required, Validators.minLength(2)]],
      modele: [null, [Validators.required, Validators.minLength(2)]],
      prix: [null, [Validators.required, Validators.min(0)]],
      couleur: [null, []],
    });

    const id = this._activatedRoute.snapshot.params['id'];
    this._voitureService.getById(+id).subscribe(data => {
      this.voiture = data
      this.form.patchValue(this.voiture);
    });
  }

  onSubmit() {
    console.log('this.form.valid :>> ', this.form.valid);
    console.log('this.form.value :>> ', this.form.value);

    if (this.form.invalid) return;

    console.log("Mise à jour des données");

    this._voitureService.update(this.voiture.id, this.form.value).subscribe(data => console.log("Data:", data));
  }

}
