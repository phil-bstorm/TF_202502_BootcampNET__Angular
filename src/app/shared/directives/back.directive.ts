import { Location } from '@angular/common';
import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appBack]',
  standalone: false
})
export class BackDirective {

  constructor (private _location: Location) { }

  @HostListener('click')
  onClick () {
    this._location.back();
  }

}
