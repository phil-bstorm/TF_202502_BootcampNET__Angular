import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputOutputRoutingModule } from './input-output-routing.module';
import { InputComponent } from './input/input.component';
import { InputEnfantComponent } from './input/input-enfant/input-enfant.component';

@NgModule({
  declarations: [
    InputComponent,
    InputEnfantComponent
  ],
  imports: [
    CommonModule,
    InputOutputRoutingModule,
  ],
  exports: [
    InputComponent,
    InputEnfantComponent
  ]
})
export class InputOutputModule { }
