import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-output-enfant',
  standalone: false,
  templateUrl: './output-enfant.component.html',
  styleUrl: './output-enfant.component.scss'
})
export class OutputEnfantComponent {
  @Output() finDuTimer: EventEmitter<string> = new EventEmitter<string>()
  username: string = 'Jhon'

  constructor() {
    // this.finDuTimer = new EventEmitter<string>(); // soit instancier dans le constructeur, soit directement avec la déclaration de la variable
  }

  declencherTimer() {
    setTimeout(() => {
      console.log("Trigger (timeout) de finDuTimer!");
      this.finDuTimer.next(this.username);
    }, 3000)
  }

  declencherDirect() {
    console.log("Trigger (direct) de finDuTimer!");
    this.finDuTimer.next(this.username);
  }
}
