import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';


export const authGuard: CanActivateFn = (route, state) => {

  const _authService : AuthService = inject(AuthService)
  return _authService.isAdmin() || _authService.isHonorable() ||_authService.isModo();
};
