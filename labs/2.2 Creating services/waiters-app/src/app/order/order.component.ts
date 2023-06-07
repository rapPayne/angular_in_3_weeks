import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  order!: any;

  constructor(
    private _ordersService: OrdersService,  //  <-- Add this
    private _activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    const orderId = this._activatedRoute.snapshot.params['orderId'];
    this._ordersService.getOrder(orderId).subscribe({
      next: (data) => { this.order = data; }
    });
  }

  getSubtotal(order: any) {
    return order?.items?.reduce((acc: number, item: any) => acc + item.price, 0);
  }

  getTotal(order: any) {
    return this.getSubtotal(order) + order?.tax + order?.tip;
  }
}
