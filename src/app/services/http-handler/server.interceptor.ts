import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Router} from '@angular/router';
import {catchError} from 'rxjs/operators';
import {getStorage, clearStorage} from 'src/app/utils';

@Injectable()
export class ServerInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const loggedInUser: any = getStorage('local', 'loggedInUser');
    let Authorization = '';
    if (loggedInUser) {
      Authorization = loggedInUser.token;
    }
    return next.handle(request.clone({setHeaders: {Authorization}})).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          clearStorage('local');
          clearStorage('session');
          this.router.navigate(['/login']);
        }
        return throwError(error);
      })
    );
  }
}
