import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { DetailsComponent } from './details/details.component';
import { HttpRoutingModule } from './http-routing.module';
import { HttpComponent } from './http.component';
import { UpdateVoitureComponent } from './update-voiture/update-voiture.component';
import { CreateVoitureComponent } from './create-voiture/create-voiture.component';


@NgModule({
  declarations: [
    HttpComponent,
    DetailsComponent,
    UpdateVoitureComponent,
    CreateVoitureComponent
  ],
  imports: [
    CommonModule,
    HttpRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class HttpModule { }
