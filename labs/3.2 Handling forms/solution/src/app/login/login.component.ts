import { Component, effect } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = "";
  password: string = "";
  error = this._authService.error;

  constructor(private _authService: AuthService, private _router: Router) {
    effect(() => (_authService.user()) && this._router.navigate(["/"]))
  }

  login() {
    this._authService.login(this.username, this.password);
  }
}
