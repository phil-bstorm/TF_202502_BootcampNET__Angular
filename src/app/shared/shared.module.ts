import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BackDirective } from './directives/back.directive';
import { TimePipe } from './pipes/time.pipe';



@NgModule({
  declarations: [
    NavBarComponent,
    TimePipe,
    BackDirective
  ],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports: [
    NavBarComponent,
    TimePipe,
    BackDirective,
  ]
})
export class SharedModule { }
