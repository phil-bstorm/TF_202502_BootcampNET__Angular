import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DemoComponent} from './demo.component';
import {HelloWorldComponent} from './components/hello-world/hello-world.component';
import {BindingComponent} from './binding/binding.component';
import {DirectiveComponent} from './directive/directive.component';

const routes: Routes = [
  {
    path: "hello-world",
    component: HelloWorldComponent
  },
  {
    path: "binding",
    component: BindingComponent,
    loadChildren: () => import("./binding/binding.module").then(m => m.BindingModule)
  },
  {
    path: "directive",
    component: DirectiveComponent,
    loadChildren: () => import("./directive/directive.module").then(m => m.DirectiveModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
