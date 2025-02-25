import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BindingRoutingModule } from './binding-routing.module';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { AttributeBindingComponent } from './attribute-binding/attribute-binding.component';
import { BindingComponent } from './binding.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    PropertyBindingComponent,
    EventBindingComponent,
    AttributeBindingComponent,
    BindingComponent
  ],
  imports: [
    CommonModule,
    BindingRoutingModule,
    FormsModule, // nécessaire pour le two-way binding [(ngModel)]
  ]
})
export class BindingModule { }
