import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { AreaService } from '../area.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  constructor(
    private _authService: AuthService,
    private _areaService: AreaService,
    private _router: Router) { }

  ngOnInit() {
    this._authService.logout();
    this._areaService.area.set("");
    this._router.navigate(['/login']);
  };
}