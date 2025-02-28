import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { user } from '../models/user.interface';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-detail',
  standalone: false,
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnInit {
  
  user!: user | null;

  router: Router = inject(Router);
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  crudService: CrudService = inject(CrudService);
  // location: Location = inject(Location);
  
  ngOnInit (): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.user = this.crudService.getUserById(+id);

    console.log('this.user :>> ', this.user);

    // if (!this.user) this.location.back();
    if (!this.user) this.router.navigate(["exo", "crud"])
  }


}
