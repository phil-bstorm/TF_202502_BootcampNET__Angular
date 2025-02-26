import {Injectable} from '@angular/core';
import {ItemQuantity} from '../models/ItemQuantity.model';

@Injectable({
  providedIn: 'root'
})
export class ShopManagerService {
  shoppingList: ItemQuantity[] = [
    {
      name: "oeufs",
      quantity: 3
    },
    {
      name: "chocolat",
      quantity: 6
    }
  ];

  ajouterALaList(item: ItemQuantity) {
    this.shoppingList.push(item);
  }

  supprimerItemA(index: number) {
    this.shoppingList.splice(index, 1);
  }
}
