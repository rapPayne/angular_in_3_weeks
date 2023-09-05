import { Component, Signal, signal } from '@angular/core';
import { OrdersService } from '../orders.service';
import { AreaService } from '../area.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  orders: Signal<any[]> = this._ordersService.currentOrders;
  area: Signal<string> = this._areaService.area; // <-- Add the area signal

  constructor(
    private _ordersService: OrdersService,
    private _areaService: AreaService,  // <-- Inject the Area service
  ) { }

  getCssClass(order: any) {
    if (order.status === 'readyForGuest') return 'success';
    if (order.status === 'problem') return 'danger';
    return '';
  }
}