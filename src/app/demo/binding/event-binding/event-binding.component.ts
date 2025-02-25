import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  standalone: false,
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.scss'
})
export class EventBindingComponent {
  afficherPopup() {
    console.log('Tu as cliqué sur le bouton?!'); // Affiche dans la console du navigateur
  }
}
