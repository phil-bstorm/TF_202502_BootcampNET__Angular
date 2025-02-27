import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormulaireRoutingModule } from './formulaire-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormulaireComponent } from './formulaire.component';


@NgModule({
  declarations: [
    FormulaireComponent
  ],
  imports: [
    CommonModule,
    FormulaireRoutingModule,
    ReactiveFormsModule
  ]
})
export class FormulaireModule { }
