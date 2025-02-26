import {Component, inject} from '@angular/core';
import {PremierService} from './services/premier.service';
import {SecondService} from './services/second.service';
import {CompteurService} from './services/compteur.service';

@Component({
  selector: 'app-service',
  standalone: false,
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent {
  private _secondService: SecondService = inject(SecondService);
  private _compteurService: CompteurService = inject(CompteurService);

  compteur: number = this._compteurService.compteur;

  constructor(private _premierService: PremierService) {
    console.log("Constructeur ServiceComponent")
    _premierService.disBonjour();

    this._secondService.disAurevoir();
  }

  onBtnClick() {
    // this._compteurService.compteur++;
    this._compteurService.incrémenterCompteur();
    this.compteur = this._compteurService.compteur;
  }
}
