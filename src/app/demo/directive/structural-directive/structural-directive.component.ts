import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  standalone: false,
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.scss'
})
export class StructuralDirectiveComponent {
  /* IF */
  textVisible:boolean = false;
  rendreLeTextVisible () {
    this.textVisible = true;
  }

  /* FOR */
  personnages = [
    {
      nom: "Pines",
      prenom: "Dipper"
    },
    {
      nom: "Pines",
      prenom: "Mabbel"
    },
    {
      nom: "Pines",
      prenom: "Stan"
    },
    {
      nom: "Cypher",
      prenom: "Bill"
    }
  ];

  /* SWITCH */
  role: string = "beginner";
}
