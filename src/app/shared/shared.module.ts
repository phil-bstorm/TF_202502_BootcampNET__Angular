import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {RouterLink} from '@angular/router';
import { TimePipe } from './pipes/time.pipe';



@NgModule({
  declarations: [
    NavBarComponent,
    TimePipe
  ],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports: [
    NavBarComponent,
    TimePipe
  ]
})
export class SharedModule { }
