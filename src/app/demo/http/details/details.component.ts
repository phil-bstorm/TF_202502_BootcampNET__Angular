import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Voiture } from '../models/voiture.model';
import { VoitureService } from '../services/voiture.service';

@Component({
  selector: 'app-details',
  standalone: false,
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {

  voiture!: Voiture;

  private _activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private _voitureService: VoitureService = inject(VoitureService);

  ngOnInit (): void {
    const id = this._activatedRoute.snapshot.params['id'];
    this._voitureService.getById(id).subscribe({
      next: data => this.voiture = data,
      error: (error) => console.log("Erreur: ", error)
    });
  }

}
