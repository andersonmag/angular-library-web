import { LoaderService } from './loader.service';
import { LoginService } from 'src/app/service/login.service';
import { finalize } from 'rxjs/operators'
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { TokenService } from './token.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService,
              private loaderService: LoaderService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.show();
    
    if (this.tokenService.isTokenExiste()) {
      const token = this.tokenService.obterToken();
      request = request.clone({
        setHeaders: {
          'Authorization': token
        }
      });
    }

    return next.handle(request).pipe(finalize(() => this.loaderService.hide()));
  }
}
