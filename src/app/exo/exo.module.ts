import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExoRoutingModule } from './exo-routing.module';
import { ExoComponent } from './exo.component';
import { ChronometreComponent } from './chronometre/chronometre.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    ExoComponent,
    ChronometreComponent
  ],
  imports: [
    CommonModule,
    ExoRoutingModule,
    SharedModule
  ]
})
export class ExoModule { }
