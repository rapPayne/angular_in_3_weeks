import { Component, Signal } from '@angular/core';
import { OrdersService } from '../orders.service';
import { RouterModule } from '@angular/router';
import { AreaService } from '../area.service';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [RouterModule],
  providers: [AreaService, OrdersService],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
  orders: Signal<any[]> = this._ordersService.currentOrders;
  area: Signal<string> = this._areaService.area; // <-- Add the area signal

  constructor(
    private _ordersService: OrdersService,
    private _areaService: AreaService,  // <-- Inject the Area service
  ) { }
}
