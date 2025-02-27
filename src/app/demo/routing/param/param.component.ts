import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-param',
  standalone: false,
  templateUrl: './param.component.html',
  styleUrl: './param.component.scss'
})
export class ParamComponent {

  parametre : string;

  queryParam : string;

  constructor(private _activatedRoute : ActivatedRoute) {

    // route => /demo/routing/monparam?queryParam=monqueryparam

    // recupere '/:param'

    this.parametre = this._activatedRoute.snapshot.params["param"]


    // Recupere le '?queryParam=???'

    this.queryParam = this._activatedRoute.snapshot.queryParams["queryParam"]

  }

}
