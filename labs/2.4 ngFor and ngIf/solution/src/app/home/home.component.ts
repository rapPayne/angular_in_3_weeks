import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  restaurantName: string = "Dinner and a Movie";
  user: any = this._authSvc.user;
  constructor(private _authSvc: AuthService) { }
}