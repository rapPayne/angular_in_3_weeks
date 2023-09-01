import { Component, Signal } from '@angular/core';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  orders: Signal<any[]> = this._ordersService.currentOrders;

  constructor(private _ordersService: OrdersService) { }
}