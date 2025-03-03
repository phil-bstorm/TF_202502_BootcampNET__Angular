import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { DemoComponent } from './demo.component';

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
  },
  {
    path: 'formulaire',
    loadChildren: () => import('./formulaire/formulaire.module').then(m => m.FormulaireModule)
  },
  {
    path: 'routing',
    loadChildren: () => import('./routing/routing.module').then(m => m.RoutingModule),
  },
  {
    path: 'observables',
    loadChildren: () => import('./observables/observables.module').then(m => m.ObservablesModule),
  },
  {
    path: 'http-client',
    loadChildren: () => import("./http/http.module").then(m => m.HttpModule),
  },
  {
    path: 'resolvers',
    loadChildren: () => import("./resolvers/resolvers.module").then(m => m.ResolversModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
