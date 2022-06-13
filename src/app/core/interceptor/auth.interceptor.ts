import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log('Hola interceptor');
    if (request.url.includes(environment.api_server)) {
      const requestCopy = request.clone({
        params: (request.params ? request.params : new HttpParams())
          .append('apikey', environment.public_key)
          .append('ts', environment.ts)
          .append('hash', environment.hash),
      });
      return next.handle(requestCopy);
    }
    return next.handle(request);
  }
}
