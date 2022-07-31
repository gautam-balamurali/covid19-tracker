import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { RouteConstants } from 'src/app/config/route-constants';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

/**
 * Interceptor to handle error in API Calls
 * When user is unauthorised or error status is 403 or 401, The user is re-routed to unauthorized page
 */
@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  ROUTE_CONSTANTS = RouteConstants.ROUTES;
  constructor(private router: Router) {}

  /**
   * Intercepts http error interceptor
   * @param request
   * @param next
   * @returns intercept
   */
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const headers = {
      'X-RapidAPI-Key': environment.xRapidApiKeyValue,
      'X-RapidAPI-Host': environment.xRapidApiHostValue,
    };
    const authReq = request.clone({ setHeaders: headers });
    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        switch (error.status) {
          case 401:
          case 403:
            this.router.navigate([`/${this.ROUTE_CONSTANTS.UNAUTHORIZED}`]);
            break;
          default:
            break;
        }
        return throwError(() => error);
      })
    ) as Observable<HttpEvent<any>>;
  }
}
