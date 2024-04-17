import { Component, Signal } from '@angular/core';
import { OrdersService } from '../orders.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [RouterModule],
  providers: [OrdersService],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
  orders: Signal<any[]> = this._ordersService.currentOrders;

  constructor(private _ordersService: OrdersService) { }
}
