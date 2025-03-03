import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, UsersService } from './users.service';

@Component({
  selector: 'app-resolvers',
  standalone: false,
  templateUrl: './resolvers.component.html',
  styleUrl: './resolvers.component.scss'
})
export class ResolversComponent implements OnInit {

  usersService: UsersService = inject(UsersService);
  router: Router = inject(Router);

  users: User[] = [];

  ngOnInit (): void {
    this.usersService.getAll()
      .subscribe(data => this.users = data);
  }

  navigateToDetails (id: number) {
    this.router.navigate(['demo', 'resolvers', 'users', 'details', id])
  }
}
