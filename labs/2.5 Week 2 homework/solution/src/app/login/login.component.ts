import { Component, Signal, WritableSignal, effect, signal } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HttpClientModule, RouterModule],
  providers: [AuthService, Router],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user: Signal<any> = this._authService.user;
  error: Signal<string | undefined> = this._authService.error;

  constructor(private _authService: AuthService, private _router: Router) {
    // If user changes, navigate to home
    effect(() => this.user() && _router.navigate(['/']));
  }

  login() {
    this._authService.login("server1", "pass");
  }
}
