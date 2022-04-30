import { Component } from '@angular/core';
import { LoginService } from './component/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quizF';
  constructor(private _loginService: LoginService){
    //this._loginService.logoutUser();
     //console.log(window);
  }
}
