import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  error = this._authService.error;

  constructor(private _authService: AuthService) { }

  login() {
    this._authService.login("server2", "pass");  // Hardcode the credentials for now
  }
}
