import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-add-shopping-item-service',
  standalone: false,
  templateUrl: './add-shopping-item-service.component.html',
  styleUrl: './add-shopping-item-service.component.scss'
})
export class AddShoppingItemServiceComponent {
  @Output() ajouterItem: EventEmitter<string> = new EventEmitter<string>();

  itemName: string = "";

  onAjouterBtnClick(){
    if(this.itemName !== "") {
      this.ajouterItem.emit(this.itemName);
      this.itemName = "";
    }
  }
}
