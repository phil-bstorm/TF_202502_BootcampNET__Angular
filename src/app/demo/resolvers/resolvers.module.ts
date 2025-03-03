import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { ResolversRoutingModule } from './resolvers-routing.module';
import { ResolversComponent } from './resolvers.component';
import { UserDetailsComponent } from './user-details/user-details.component';


@NgModule({
  declarations: [
    ResolversComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    ResolversRoutingModule,
    SharedModule,
  ]
})
export class ResolversModule { }
