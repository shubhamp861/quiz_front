import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../../component/login/login.service';

@Injectable()
class AuthIntercepterInterceptor implements HttpInterceptor {

  constructor(private _loginService:LoginService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem("token");
    let req = request;
    if(token!=null||token!=undefined){
       req = req.clone({setHeaders:{'Authorization':`Bearer ${token}`}});
    }
    return next.handle(req);
  }
}

export const authIntercetpterProvider=[
  {
    provide:HTTP_INTERCEPTORS,
    useClass:AuthIntercepterInterceptor,
    multi:true
  }
]
