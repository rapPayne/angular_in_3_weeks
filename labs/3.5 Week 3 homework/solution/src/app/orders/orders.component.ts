import { Component, Signal, computed } from '@angular/core';
import { OrdersService } from '../orders.service';
import { AreaService } from '../area.service';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  orders: Signal<any[]> = this._ordersService.currentOrders;
  area: Signal<string> = this._areaService.area;
  myOrders: Signal<any[]> = computed(() => this.orders()!.filter(order => order.area === this.area()));
  otherOrders: Signal<any[]> = computed(() => this.orders()!.filter(order => order.area !== this.area()));

  constructor(
    private _ordersService: OrdersService,
    private _areaService: AreaService,
  ) { }

  getCssClass(order: any) {
    if (order.status === 'readyForGuest') return 'success';
    if (order.status === 'problem') return 'danger';
    return '';
  }

}
