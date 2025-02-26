import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-list-shopping',
  standalone: false,
  templateUrl: './list-shopping.component.html',
  styleUrl: './list-shopping.component.scss'
})
export class ListShoppingComponent {
    @Input() listOfItems: string[] = [];

    @Output() supprimerIndex: EventEmitter<number> = new EventEmitter<number>();

    onSupprimerBtnClick(index : number){
      this.supprimerIndex.emit(index);
    }
}
