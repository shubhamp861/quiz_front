import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../../component/login/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class DashboradCheckGuard implements CanActivate {
  constructor(private _loginService:LoginService,private _rout:Router,private _snak:MatSnackBar){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log(this._loginService.isUserLogin());
      console.log(this._loginService.getUserRoles());
      if(this._loginService.isUserLogin() && (this._loginService.getUserRoles() as string).toUpperCase() == "ADMIN")
       return true;
      else {this._snak.open("Access Denied !!!!","",{duration:300});this._rout.navigate(["login"]);}
  }

}
