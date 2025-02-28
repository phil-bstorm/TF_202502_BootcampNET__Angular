import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-routing',
  standalone: false,
  templateUrl: './routing.component.html',
  styleUrl: './routing.component.scss'
})
export class RoutingComponent implements OnInit {

  constructor (private _router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit (): void {
    console.log("Activated Route:", this._activatedRoute);
  }

  routerRedirection () {
    this._router.navigate(["exo", "formulaire"]);
  }
}
