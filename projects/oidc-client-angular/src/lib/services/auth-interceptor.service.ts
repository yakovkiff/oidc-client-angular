import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { first, map, mergeMap, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(
    private authService: AuthService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.authService.user$
      .pipe(
        first(user => !!user),
        map(user => this.authService.setAuthHeaders(user, req.headers)),
        mergeMap(headers => {
          req = req.clone({ headers });
          return next.handle(req).pipe(
            tap((event: HttpEvent<any>) => {
            }, (err: any) => {
              if (err instanceof HttpErrorResponse && err.status === 401) {
                this.authService.logout();
              }
            }),
          );
        })
      );
  }
}
