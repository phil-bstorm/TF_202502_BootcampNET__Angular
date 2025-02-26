import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PremierService {
  constructor() {
    console.log("Constructeur PremierService");
  }

  disBonjour(){
    console.log("Bonjour à tous!");
  }
}
