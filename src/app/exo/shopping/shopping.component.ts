import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping',
  standalone: false,
  templateUrl: './shopping.component.html',
  styleUrl: './shopping.component.scss'
})
export class ShoppingComponent {
  shoppingList: string[] = ["oeufs", "chocolat"];

  ajouterALaList(item: string){
    this.shoppingList.push(item);
  }

  supprimerItemA(index: number){
    this.shoppingList.splice(index, 1);
  }
}
