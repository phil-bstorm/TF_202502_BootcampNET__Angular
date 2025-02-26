import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { InputOutputComponent } from './input-output/input-output.component';


@NgModule({
  declarations: [
    DemoComponent,
    HelloWorldComponent,
    InputOutputComponent,
  ],
  imports: [
    CommonModule,
    DemoRoutingModule
  ],
})
export class DemoModule { }
