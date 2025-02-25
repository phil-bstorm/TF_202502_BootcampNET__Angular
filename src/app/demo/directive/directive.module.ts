import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectiveRoutingModule } from './directive-routing.module';
import { DirectiveComponent } from './directive.component';
import { ComponentDirectiveComponent } from './component-directive/component-directive.component';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';


@NgModule({
  declarations: [
    DirectiveComponent,
    ComponentDirectiveComponent,
    StructuralDirectiveComponent
  ],
  imports: [
    CommonModule,
    DirectiveRoutingModule
  ]
})
export class DirectiveModule { }
