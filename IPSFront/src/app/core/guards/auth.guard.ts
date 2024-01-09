import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const token = sessionStorage.getItem('token') ? true: false;
  const _router = inject(Router)
  if (!token) {
    _router.navigate(['/','log-in']);
  }
  return token;
};
