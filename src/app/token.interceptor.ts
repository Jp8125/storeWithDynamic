import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = "Bearer c638db58ad864ce4e1bd7f2b7ed488bfb29dfa7cd2f8f4e429ea320112df7728"
    const req=request.clone({headers:request.headers.set('Authorization',token)})
    return next.handle(req);
  }
}
