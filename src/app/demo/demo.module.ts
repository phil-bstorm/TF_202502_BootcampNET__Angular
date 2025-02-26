import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { InputOutputComponent } from './input-output/input-output.component';
import {InputOutputModule} from './input-output/input-output.module';
import {BindingModule} from './binding/binding.module';
import {DirectiveModule} from './directive/directive.module';


@NgModule({
  declarations: [
    DemoComponent,
    HelloWorldComponent,
    InputOutputComponent,
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    BindingModule,
    DirectiveModule,
    InputOutputModule
  ],
})
export class DemoModule { }
