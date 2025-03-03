import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { User, UsersService } from './users.service';

export const UserResolver: ResolveFn<User | null> = (route, state) => {

  const id = route.params['id'];

  if (!id) return null;

  return inject(UsersService).getById(id);
};
