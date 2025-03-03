import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../users.service';

@Component({
  selector: 'app-user-details',
  standalone: false,
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent implements OnInit {
  
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  user!: User;
  
  ngOnInit (): void {
    this.user =  this.activatedRoute.snapshot.data['user'];
  }
  

}
