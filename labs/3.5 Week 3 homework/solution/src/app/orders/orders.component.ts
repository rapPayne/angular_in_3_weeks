import { Component, Signal, computed } from '@angular/core';
import { OrdersService } from '../orders.service';
import { RouterModule } from '@angular/router';
import { AreaService } from '../area.service';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [RouterModule],
  providers: [],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
  orders: Signal<any[]> = this._ordersService.currentOrders;
  myOrders: Signal<any[]> = computed(() => this.orders()?.filter(order => order.area === this.area()));
  otherOrders: Signal<any[]> = computed(() => this.orders()?.filter(order => order.area !== this.area()));

  area: Signal<string> = this._areaService.area; // <-- Add the area signal

  constructor(
    private _ordersService: OrdersService,
    private _areaService: AreaService,  // <-- Inject the Area service
  ) { }

  ngOnInit() {
    this._ordersService.startMonitoringOrders(30000); // Every 30 seconds
  }
  ngOnDestroy() {
    this._ordersService.stopMonitoringOrders();
  }

  getCssClass(order: any) {
    if (order.status === 'readyForGuest') return 'success';
    if (order.status === 'problem') return 'danger';
    return '';
  }
}
