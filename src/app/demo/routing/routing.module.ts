import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingRoutingModule } from './routing-routing.module';
import { RoutingComponent } from './routing.component';
import { ParamComponent } from './param/param.component';
import { DeactivateComponent } from './deactivate/deactivate.component';


@NgModule({
  declarations: [
    RoutingComponent,
    ParamComponent,
    DeactivateComponent
  ],
  imports: [
    CommonModule,
    RoutingRoutingModule
  ]
})
export class RoutingModule { }
