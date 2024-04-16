import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HttpClientModule],
  providers: [AuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  error = this._authService.error;

  constructor(private _authService: AuthService) { }

  login() {
    this._authService.login("server1", "pass");  // Hardcode the credentials for now
  }
}
