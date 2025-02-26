import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-add-shopping-item',
  standalone: false,
  templateUrl: './add-shopping-item.component.html',
  styleUrl: './add-shopping-item.component.scss'
})
export class AddShoppingItemComponent {
  @Output() ajouterItem: EventEmitter<string> = new EventEmitter<string>();

  itemName: string = "";

  onAjouterBtnClick(){
    if(this.itemName !== "") {
      this.ajouterItem.emit(this.itemName);
      this.itemName = "";
    }
  }
}
