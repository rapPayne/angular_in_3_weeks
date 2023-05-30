import { Component, Signal, WritableSignal, computed, signal } from '@angular/core';
import { OrdersService } from '../orders.service';
import { AreaService } from '../area.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  orders: Signal<any[]> = signal([]);
  area!: Signal<string>;
  myOrders: Signal<any[]> = computed(() => this.orders()?.filter(order => order.area === this.area()));
  otherOrders: Signal<any[]> = computed(() => this.orders()?.filter(order => order.area !== this.area()));

  constructor(
    private _ordersService: OrdersService,
    private _areaService: AreaService,  // <-- Inject the Area service
  ) { }

  ngOnInit() {
    this.area = this._areaService.area;
    this.orders = this._ordersService.currentOrders;
  }

  getCssClass(order: any) {
    if (order.status === 'readyForGuest') return 'success';
    if (order.status === 'problem') return 'danger';
    return '';
  }
}
