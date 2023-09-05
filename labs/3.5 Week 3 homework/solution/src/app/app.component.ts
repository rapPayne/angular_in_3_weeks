import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  today: Date = new Date();
  user = this._authSvc.user;  // Set our user to the service's user signal

  constructor(private _authSvc: AuthService) { }   // Inject AuthService
}