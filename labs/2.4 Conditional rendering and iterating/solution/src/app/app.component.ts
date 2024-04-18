import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AreasComponent } from './areas/areas.component';
import { OrderComponent } from './order/order.component';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AreaService } from './area.service';
import { OrdersService } from './orders.service';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [AreaService, AuthService, OrdersService],
  imports: [RouterModule, HttpClientModule, HomeComponent, AreasComponent, OrderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  today: Date = new Date();
  user = this._authService.user; // Set our user to the service's user signal
  constructor(private _authService: AuthService) { }
}
