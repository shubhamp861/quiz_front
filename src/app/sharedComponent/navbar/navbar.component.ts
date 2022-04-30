import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/component/login/login.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(public _logSerive:LoginService) {
   }
  isUserLoggedIn={islogIN:false,username:""};
  ngOnInit(): void {
    this._logSerive.userLoginSubscriber.subscribe(data=>{
      this.isUserLoggedIn = data;
    });
  }
  logOut(){
    this._logSerive.logoutUser();
  }

}
