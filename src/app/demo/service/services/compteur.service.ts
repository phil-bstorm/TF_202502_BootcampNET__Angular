import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompteurService {
  compteur: number = 0;

  incrémenterCompteur() {
    this.compteur++;
  }
}
