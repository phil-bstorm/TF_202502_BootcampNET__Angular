import { Component } from '@angular/core';

@Component({
  selector: 'app-ouput',
  standalone: false,
  templateUrl: './output.component.html',
  styleUrl: './output.component.scss'
})
export class OutputComponent {
  alertTimer(text: string){
    alert(text + " -> réaction du parent");
  }
}
