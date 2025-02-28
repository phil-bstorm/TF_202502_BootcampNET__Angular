import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateVoitureComponent } from './create-voiture/create-voiture.component';
import { DetailsComponent } from './details/details.component';
import { HttpComponent } from './http.component';
import { UpdateVoitureComponent } from './update-voiture/update-voiture.component';

const routes: Routes = [
  { path: '', component: HttpComponent },
  { path: 'create', component: CreateVoitureComponent },
  { path: ':id', component: DetailsComponent },
  { path: 'update/:id', component: UpdateVoitureComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HttpRoutingModule { }
