import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  emailHasSpaces: boolean = false;
  passwordHasSpaces: boolean = false;

  validateFields() {
    this.emailHasSpaces = /\s/.test(this.email);
    this.passwordHasSpaces = /\s/.test(this.password);
  }
}
