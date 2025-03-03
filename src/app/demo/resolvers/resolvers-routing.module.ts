import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResolversComponent } from './resolvers.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserResolver } from './user.resolver';

const routes: Routes = [

  { path: '', component: ResolversComponent },
  { 
    path: 'users/details/:id', 
    component: UserDetailsComponent,
    resolve: { user: UserResolver }
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResolversRoutingModule { }
