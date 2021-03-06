import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

import {Observable} from 'rxjs';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  private readonly apiKey = '468c3155e3e041a97a5b2569eeadd879';

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({params: request.params.set('api_key', this.apiKey)});
    return next.handle(request);
  }
}
