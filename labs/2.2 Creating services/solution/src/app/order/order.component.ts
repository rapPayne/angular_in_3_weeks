import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [RouterModule, HttpClientModule],
  providers: [OrdersService],   //  <-- Add this ...
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  order!: any;
  constructor(
    private _ordersService: OrdersService,  //  <-- ... and this
    private _activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const orderId = this._activatedRoute.snapshot.params['orderId'];
    this._ordersService.getOrder(orderId).subscribe({
      next: (data) => { this.order = data; }
    });
  }

  getSubtotal(order: any): number {
    return order?.items?.reduce((acc: number, item: any) =>
      acc + item.price, 0);
  }

  getTotal(order: any) {
    return this.getSubtotal(order) + order?.tax + order?.tip;
  }
}
