import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudRoutingModule } from './crud-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { UpdateComponent } from './update/update.component';

// Mettre en place un CRUD de fan de série.

// Chaque fan sera défini par son nom, sa date de naissance(interdit au moins de 13 ans), et la liste de leur séries préférées (juste le titre).
// Aucune limitation du nombre de séries définie par l’utilisateur à la création de son profil
// Sur la page de modification de profil, il doit être possible d’ajouter ou supprimer des séries.
// 4 composants (liste des fans, détails, création, mise à jour)
// Seule l’année est vérifiée pour l’âge des fans
// Si un champ est visible, il sera obligatoirement rempli


@NgModule({
  declarations: [
    CreateComponent,
    ListComponent,
    DetailComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    CrudRoutingModule,
    ReactiveFormsModule
  ]
})
export class CrudModule { }
