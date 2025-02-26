import {Component, inject} from '@angular/core';
import {ShopManagerService} from './services/shop-manager.service';
import {ItemQuantity} from './models/ItemQuantity.model';

@Component({
  selector: 'app-shopping-service',
  standalone: false,
  templateUrl: './shopping-service.component.html',
  styleUrl: './shopping-service.component.scss'
})
export class ShoppingServiceComponent {
  private _shopMS: ShopManagerService = inject(ShopManagerService);
  shoppingList: ItemQuantity[] = this._shopMS.shoppingList;

  ajouterALaList(item: ItemQuantity){
    this._shopMS.ajouterALaList(item);
    this.shoppingList = this._shopMS.shoppingList;
  }

  supprimerItemA(index: number){
    this._shopMS.supprimerItemA(index);
    this.shoppingList = this._shopMS.shoppingList;
  }
}
