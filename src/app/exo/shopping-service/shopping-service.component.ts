import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-service',
  standalone: false,
  templateUrl: './shopping-service.component.html',
  styleUrl: './shopping-service.component.scss'
})
export class ShoppingServiceComponent {
  shoppingList: string[] = ["oeufs", "chocolat"];

  ajouterALaList(item: string){
    this.shoppingList.push(item);
  }

  supprimerItemA(index: number){
    this.shoppingList.splice(index, 1);
  }
}
