import {Component} from '@angular/core';

@Component({
  selector: 'app-component-directive',
  standalone: false,
  templateUrl: './component-directive.component.html',
  styleUrl: './component-directive.component.scss'
})
export class ComponentDirectiveComponent {
  couleurDuText = 'red';
  stylesObj: any = {
    'font-size.px': 22,
    'color': 'purple'
  }

  afficherEnErreur: boolean = false;

  onAfficherEnErreurClick() {
    this.afficherEnErreur = true;
  }
}
