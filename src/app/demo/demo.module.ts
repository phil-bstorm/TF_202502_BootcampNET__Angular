import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';


@NgModule({
  declarations: [
    DemoComponent,
    HelloWorldComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule
  ],
})
export class DemoModule { }
