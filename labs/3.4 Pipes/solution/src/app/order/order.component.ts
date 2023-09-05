import { HttpClient } from '@angular/common/http';
import { Component, WritableSignal, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  order: WritableSignal<any> = this._ordersService.currentOrder;  // <-- Change this line
  items: WritableSignal<any> = signal([{}])                       // <-- Add this line

  constructor(private _activatedRoute: ActivatedRoute, private _ordersService: OrdersService) { }

  ngOnInit(): void {
    const orderId = this._activatedRoute.snapshot.params['orderId'];
    this._ordersService.setCurrentOrder(orderId);  // <-- Change this call
  }

  getSubtotal(order: any): number {
    return order?.items?.reduce((acc: number, item: any) =>
      acc + item.price, 0);
  }
  // getSubtotal(order: any): number {
  //   if (!order?.items) return 0;
  //   let total = 0;
  //   for (let item of order?.items) {
  //     total += item.price;
  //   }
  //   return total;
  // }

  getTotal(order: any): number {
    return this.getSubtotal(order) + order?.tax + order?.tip;
  }

  setStatus(status: string) {
    this._ordersService.setStatusOnCurrentOrder(status);
  }

}
