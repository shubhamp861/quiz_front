import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { UserService } from '../../service/user.service';
import { LoginService } from './login.service';
import {ExamService} from '../../service/exam.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,AfterViewInit {

  constructor(private _loginService:LoginService,private _examAervice:ExamService) { }
  categories;
  @ViewChild("username") username: any;
  @ViewChild("password") password: any;
  ngOnInit(): void {

  }
  validateUser() {
    this._loginService.getToken({username:this.username.nativeElement.value,password:this.password.nativeElement.value});
  }

  ngAfterViewInit(): void {
    //this.username.nativeElement.value = "user";
    //this.password.nativeElement.value = "user";
  }

}
