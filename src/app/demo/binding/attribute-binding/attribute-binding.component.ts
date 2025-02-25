import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-binding',
  standalone: false,
  templateUrl: './attribute-binding.component.html',
  styleUrl: './attribute-binding.component.scss'
})
export class AttributeBindingComponent {
  bouton1IsDisabled: boolean = false;
  bouton2IsDisabled: boolean = true;

  onClickButton1() {
    this.bouton1IsDisabled = true;
    this.bouton2IsDisabled = false;
  }

  onClickButton2() {
    this.bouton1IsDisabled = false;
    this.bouton2IsDisabled = true;
  }
}
