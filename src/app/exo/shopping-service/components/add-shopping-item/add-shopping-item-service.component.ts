import {Component, EventEmitter, Output} from '@angular/core';
import {ItemQuantity} from '../../models/ItemQuantity.model';

@Component({
  selector: 'app-add-shopping-item-service',
  standalone: false,
  templateUrl: './add-shopping-item-service.component.html',
  styleUrl: './add-shopping-item-service.component.scss'
})
export class AddShoppingItemServiceComponent {
  @Output() ajouterItem: EventEmitter<ItemQuantity> = new EventEmitter<ItemQuantity>();

  itemName: string = "";
  quantity: number = 0;

  onAjouterBtnClick() {
    if (this.itemName !== "") {
      this.ajouterItem.emit({
        name: this.itemName,
        quantity: this.quantity
      });
      this.itemName = "";
      this.quantity = 0;
    }
  }
}
