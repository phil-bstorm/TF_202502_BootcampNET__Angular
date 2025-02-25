import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExoRoutingModule } from './exo-routing.module';
import { ExoComponent } from './exo.component';


@NgModule({
  declarations: [
    ExoComponent
  ],
  imports: [
    CommonModule,
    ExoRoutingModule
  ]
})
export class ExoModule { }
