import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingComponent } from './routing.component';
import { ParamComponent } from './param/param.component';
import { authGuard } from '../../shared/guards/auth.guard';

const routes: Routes = [{
  path : "",
  component : RoutingComponent,
  canActivate : [authGuard]
},
{
  path : ":param",
  component : ParamComponent,
  canActivate : [authGuard]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingRoutingModule { }
