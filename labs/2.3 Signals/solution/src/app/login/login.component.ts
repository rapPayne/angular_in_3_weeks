import { Component, Signal, WritableSignal, signal } from '@angular/core';
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
  user: Signal<any> = this._authService.user;
  error: Signal<string | undefined> = this._authService.error;

  constructor(private _authService: AuthService) { }

  login() {
    this._authService.login("server1", "pass");
  }
}
