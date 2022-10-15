import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient) { }
 
 // baseURL = "http://localhost:8080/user/v1";
  baseURL = " https://app-quiz-bck.herokuapp.com/user/v1";
  createUser(user:any){
    return this.http.post(`${this.baseURL}/create`,user);
  }
  validateUser(userName:string,password:string){
    return this.http.post(`${this.baseURL}/validate`, {"username":userName,"password":password});
  }
}
