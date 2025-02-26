import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputOutputRoutingModule } from './input-output-routing.module';
import { InputComponent } from './input/input.component';
import { InputEnfantComponent } from './input/input-enfant/input-enfant.component';
import { OutputComponent } from './ouput/output.component';
import { OutputEnfantComponent } from './ouput/output-enfant/output-enfant.component';
import {FormsModule} from '@angular/forms';
import { ContentComponent } from './content/content.component';
import { ContentEnfantComponent } from './content/content-enfant/content-enfant.component';

@NgModule({
  declarations: [
    InputComponent,
    InputEnfantComponent,
    OutputComponent,
    OutputEnfantComponent,
    ContentComponent,
    ContentEnfantComponent
  ],
  imports: [
    CommonModule,
    InputOutputRoutingModule,
    FormsModule,
  ],
  exports: [
    InputComponent,
    InputEnfantComponent
  ]
})
export class InputOutputModule { }
