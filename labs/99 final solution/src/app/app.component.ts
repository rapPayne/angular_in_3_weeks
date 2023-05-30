import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  today: Date = new Date();
  user: any;

  constructor(private _authSvc: AuthService) { }

  ngOnInit() {
    this.user = this._authSvc.user;
  }
}
