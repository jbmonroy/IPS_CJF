import { HttpInterceptorFn } from '@angular/common/http';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {
  const authReq = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${sessionStorage.getItem('token')}`)
  });
  return next(authReq);
};
