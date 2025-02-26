import {Component} from '@angular/core';
import {ObjetPourEnfant} from "./models/ObjetPourEnfant";
import {CssClasses} from "./input-enfant/models/input-enfant.enum";

@Component({
  selector: 'app-input',
  standalone: false,
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  objetPourEnfant:ObjetPourEnfant = {
    title: "Un jouet",
    value: 42
  }
  enfant1DivClasses:CssClasses[] = [CssClasses.textRouge]


  objetPourEnfant2:ObjetPourEnfant = {
    title: "Un autre jouet",
    value: 404
  }
  enfant2DivClasses:CssClasses[] = [CssClasses.textJaune]
}
