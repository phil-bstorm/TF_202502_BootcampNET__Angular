import {Component, Input} from '@angular/core';
import {ObjetPourEnfant} from "../models/ObjetPourEnfant";
import {CssClasses} from "./models/input-enfant.enum";

@Component({
  selector: 'app-input-enfant',
  standalone: false,
  templateUrl: './input-enfant.component.html',
  styleUrl: './input-enfant.component.scss'
})
export class InputEnfantComponent {
  @Input() test!: string;
  @Input() testObj!: ObjetPourEnfant; // ne pas utiliser "any" car ça retire le typage

  @Input() divClasses!: CssClasses[]; // on restraint le parent a donné des class CSS qui sont dans input-enfant.component.scss
}
