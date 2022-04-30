import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  userLoginSubscriber:Subject<{islogIN:boolean,username:string}>= new Subject();

  constructor(private _http: HttpClient,private _route:Router,private _snak:MatSnackBar) { }
  baseUrl = "http://localhost:8080";
  getToken(logindata: any) {
    return this._http.post(`${this.baseUrl}/token`, logindata)
    .subscribe((data:any) => {
      console.log(data);
      this.setToken(data.token); 
      this.getCurrentUser().subscribe(
        (data:any)=>{
          this.setUser(data);
          this._route.navigate([(data.rolesSet[0].roleName as string).toLocaleUpperCase()]);
        },
        (error)=>{console.log(error) }
      )
    }
    ,error=>{console.log(error);
      this._snak.open("Invalid credential !! try again....","",{duration:300});
    });
  }
  setToken(token) {
    localStorage.setItem("token", token);
  }
  logoutUser() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.userLoginSubscriber.next({islogIN:false,username:null});
    this._route.navigate(["/login"]);

  }
  isUserLogin() {
    let tokenString = localStorage.getItem("token");
    if (tokenString != undefined || tokenString != null || tokenString != "") return true;
    else return true;
  }
  getTokenString() {
    localStorage.getItem("token");
  }
  setUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
    this.userLoginSubscriber.next({islogIN:true,username:user.firstName});
  }
  getUser() {
    let localUser = localStorage.getItem("user");
    if (localUser != null) {
      return JSON.parse(localUser);
    }
    else { this.logoutUser; return null; }
  }
  getUserRoles() {
    let user = this.getUser();
    return user.authorities[0].authority;
  }
  getCurrentUser() {
    return this._http.get(`${this.baseUrl}/currentUser`);
  }
}
