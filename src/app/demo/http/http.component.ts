import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { finalize, mergeMap } from 'rxjs';
import { Voiture } from './models/voiture.model';
import { VoitureService } from './services/voiture.service';

@Component({
  selector: 'app-http',
  standalone: false,
  templateUrl: './http.component.html',
  styleUrl: './http.component.scss'
})
export class HttpComponent implements OnInit {

  voitures!: Voiture[];

  _voitureService: VoitureService = inject(VoitureService);
  _router: Router = inject(Router);

  ngOnInit (): void {
    this._voitureService.getAll().subscribe(data => {
      this.voitures = data;
      console.log('this.voitures :>> ', this.voitures);
    });
  }

  toDetails (id: number) {
    this._router.navigate(['demo', 'http-client', id]);
  }

  toUpdate (id: number) {
    this._router.navigate(['demo', 'http-client', 'update', id]);
  }

  toDelete (id: number) {
    if (!confirm("Voulez-vous supprimer la voiture ?")) return;

    this._voitureService.delete(id)
      .pipe(
        mergeMap(() => this._voitureService.getAll()),
        finalize(() => console.log('Je suis en train de passer le pipe de rxjs'))
      )
      .subscribe(data => this.voitures = data);
  }

  toCreate () {
    this._router.navigate(['demo', 'http-client', 'create']);
  }

}
