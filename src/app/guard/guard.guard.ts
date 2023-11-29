import { CanActivateFn, Router } from '@angular/router';

import { AuttserviceService } from './auttservice.service';
import { inject } from '@angular/core';

export const guardGuard: CanActivateFn = (route, state) => {
  return true;
};

export const AuthencticationGuard = () => {
  const authService = inject(AuttserviceService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    console.log("Is logged",authService.isLoggedIn())
    return true;
  }
  console.log("Is logged",authService.isLoggedIn())
  return router.parseUrl('/login');
};