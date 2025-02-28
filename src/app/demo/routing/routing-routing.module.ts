import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../../shared/guards/auth.guard';
import { canDeactivateGuard } from '../../shared/guards/can-deactivate.guard';
import { DeactivateComponent } from './deactivate/deactivate.component';
import { ParamComponent } from './param/param.component';
import { RoutingComponent } from './routing.component';

const routes: Routes = [
  {
    path: "",
    component: RoutingComponent,
    canActivate: [authGuard]
  },
  {
    path: 'deactivate',
    component: DeactivateComponent,
    canDeactivate: [canDeactivateGuard]
  },
  {
    path: "params/:param",
    component: ParamComponent,
    canActivate: [authGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingRoutingModule { }
