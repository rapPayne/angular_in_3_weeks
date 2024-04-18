import { Component, Signal, effect, signal } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  providers: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user: Signal<any> = this._authService.user;
  error: Signal<any> = this._authService.error;
  username: string = "";
  password: string = "";

  constructor(
    private _authService: AuthService,
    private _router: Router
  ) {
    // If user changes, navigate to home
    effect(() => this.user() && this._router.navigate(['/']));
  }

  login() {
    this._authService.login(this.username, this.password);
  }
}
