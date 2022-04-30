import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroupDirective, NgForm, FormGroup } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _userService: UserService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  userFormControl = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
  });
  updateProfile() {

    console.log(this.userFormControl.getRawValue());
    if(this.userFormControl.valid){
    this._userService.createUser(this.userFormControl.getRawValue())
      .subscribe((data) => {
        Swal.fire("Success","Registration Done !","success");
      }, (error) => {
        console.log(error);
        this.displaySnak(error.error.message)
      });}
  }
  get firstName() { return this.userFormControl.get('firstName'); }
  get lastName() { return this.userFormControl.get('lastName'); }
  get email() { return this.userFormControl.get('email'); }
  get username() { return this.userFormControl.get('username'); }
  get password() { return this.userFormControl.get('password'); }
  get phone() { return this.userFormControl.get('phone'); }

  displaySnak(msg) {
    this._snackBar.open(msg, "ok",
      { duration: 3000, });
  }
  resetForm(){
    this.userFormControl.reset();
  }
}
