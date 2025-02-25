import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DemoComponent} from './demo.component';
import {HelloWorldComponent} from './components/hello-world/hello-world.component';
import {BindingComponent} from './binding/binding.component';

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
    component: BindingComponent,
    loadChildren: () => import("./binding/binding.module").then(m => m.BindingModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
