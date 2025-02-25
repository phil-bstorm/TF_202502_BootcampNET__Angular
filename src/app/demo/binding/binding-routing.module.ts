import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PropertyBindingComponent} from './property-binding/property-binding.component';
import {EventBindingComponent} from './event-binding/event-binding.component';
import {AttributeBindingComponent} from './attribute-binding/attribute-binding.component';
import {BindingComponent} from './binding.component';

const routes: Routes = [
  {
    path: "property",
    component: PropertyBindingComponent
  },
  {
    path: "event",
    component: EventBindingComponent
  },
  {
    path: "attribute",
    component: AttributeBindingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BindingRoutingModule { }
