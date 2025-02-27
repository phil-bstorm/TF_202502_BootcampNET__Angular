import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-routing',
  standalone: false,
  templateUrl: './routing.component.html',
  styleUrl: './routing.component.scss'
})
export class RoutingComponent {

  constructor(private _router : Router) {
  }

  routerRedirection(){
    this._router.navigate(["exo","formulaire"])
  }
}
