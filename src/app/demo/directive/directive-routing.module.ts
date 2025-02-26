import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ComponentDirectiveComponent} from './component-directive/component-directive.component';
import {StructuralDirectiveComponent} from './structural-directive/structural-directive.component';
import {DirectiveComponent} from './directive.component';

const routes: Routes = [
  {
    path: "",
    component: DirectiveComponent
  },
  {
    path: "component",
    component: ComponentDirectiveComponent
  },
  {
    path: "structural",
    component: StructuralDirectiveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectiveRoutingModule { }
