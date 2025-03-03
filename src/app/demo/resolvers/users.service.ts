import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users: User[] = [
    { id: 1, lastname: 'Geerts', firstname: 'Quentin' },
    { id: 2, lastname: 'Person', firstname: 'Michael' },
    { id: 3, lastname: 'Morre', firstname: 'Thierry' },
  ];

  constructor () { }

  getAll (): Observable<User[]> {
    return of(this.users);
  }

  getById (id: number): Observable<User | null> {
    return of(this.users.find(u => u.id == id) ?? null);
  }
}


export interface User {
  id: number;
  lastname: string;
  firstname: string;
}