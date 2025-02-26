import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DemoComponent} from './demo.component';
import {HelloWorldComponent} from './components/hello-world/hello-world.component';
import {BindingComponent} from './binding/binding.component';
import {DirectiveComponent} from './directive/directive.component';
import {InputOutputComponent} from './input-output/input-output.component';

const routes: Routes = [
  {
    path: "",
    component: DemoComponent
  },
  {
    path: "hello-world",
    component: HelloWorldComponent
  },
  {
    path: "binding",
    loadChildren: () => import("./binding/binding.module").then(m => m.BindingModule)
  },
  {
    path: "directive",
    loadChildren: () => import("./directive/directive.module").then(m => m.DirectiveModule)
  },
  {
    path: "input-output",
    loadChildren: () => import("./input-output/input-output-routing.module").then(m => m.InputOutputRoutingModule)
  },
  {
    path: 'service',
    loadChildren: () => import('./service/service.module').then(m => m.ServiceModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
