import { Component, Signal, WritableSignal, signal } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { OrdersService } from '../orders.service';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { CommonModule } from '@angular/common';
import { OrderStatusPipe } from "../order-status.pipe";

@Component({
  selector: 'app-order',
  standalone: true,
  providers: [],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
  imports: [CommonModule, RouterModule, MenuItemComponent, OrderStatusPipe]
})
export class OrderComponent {
  order: Signal<any> = this._ordersService.currentOrder;
  items: WritableSignal<any> = signal([{}])
  constructor(private _activatedRoute: ActivatedRoute,
    private _ordersService: OrdersService,
  ) { }
  ngOnInit(): void {
    const orderId = this._activatedRoute.snapshot.params['orderId'];
    this._ordersService.setCurrentOrder(orderId);
  }

  getSubtotal(order: any): number {
    return order?.items?.reduce((acc: number, item: any) =>
      acc + item.price, 0);
  }

  getTotal(order: any) {
    return this.getSubtotal(order) + order?.tax + order?.tip;
  }

  setStatus(status: string) {
    this._ordersService.setStatusOnCurrentOrder(status);
  }

}
