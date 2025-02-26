import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-list-shopping-service',
  standalone: false,
  templateUrl: './list-shopping-service.component.html',
  styleUrl: './list-shopping-service.component.scss'
})
export class ListShoppingServiceComponent {
    @Input() listOfItems: string[] = [];

    @Output() supprimerIndex: EventEmitter<number> = new EventEmitter<number>();

    onSupprimerBtnClick(index : number){
      this.supprimerIndex.emit(index);
    }
}
