import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InterceptorsRoutingModule } from './interceptors-routing.module';
import { InterceptorsComponent } from './interceptors.component';


@NgModule({
  declarations: [
    InterceptorsComponent
  ],
  imports: [
    CommonModule,
    InterceptorsRoutingModule
  ]
})
export class InterceptorsModule { }
