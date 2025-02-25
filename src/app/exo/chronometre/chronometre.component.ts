import {Component} from '@angular/core';

@Component({
  selector: 'app-chronometre',
  standalone: false,
  templateUrl: './chronometre.component.html',
  styleUrl: './chronometre.component.scss'
})
export class ChronometreComponent {
  compteur: number = 0;
  intervalIndex: any = null;

  start() {
    if (this.intervalIndex == null) {
      this.intervalIndex = setInterval(() => {
        this.compteur++
      }, 1000);
    }
  }

  stop() {
    if (this.intervalIndex != null) {
      clearInterval(this.intervalIndex);
      this.intervalIndex = null;
    }
  }

  reset() {
    this.stop();
    this.compteur = 0;
  }
}
