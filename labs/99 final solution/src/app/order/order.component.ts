import { Component, WritableSignal, effect, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  order: WritableSignal<any> = this._ordersService.currentOrder;
  items: WritableSignal<any> = signal([{}])

  constructor(
    private _ordersService: OrdersService,
    private _activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const orderId = this._activatedRoute.snapshot.params['orderId'];
    this._ordersService.setCurrentOrder(orderId)
  }

  getSubtotal(order: any) {
    return order?.items?.reduce((acc: number, item: any) =>
      acc + item.price, 0);
  }

  getTotal(order: any) {
    return this.getSubtotal(order) + order.tax + order.tip;
  }

  setStatus(status: string) {
    this._ordersService.setStatusOnCurrentOrder(status);
  }
}
