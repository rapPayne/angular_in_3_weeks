import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  order!: any;
  constructor(private _activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    const orderId = this._activatedRoute.snapshot.params['orderId'];
    this.order = {
      id: orderId,
      orderTime: "2099-03-30T18:26:13.161Z",
      pickupTime: "2099-03-30T18:38:03.286Z",
      area: "Theater 1",
      location: "Table 6",
      tax: 3.89,
      tip: 9.44,
      items: [                               // <-- Add this
        { id: 1, itemId: 9, price: 11.75, }, // <-- Add this
        { id: 2, itemId: 1, price: 9.54, },   // <-- Add this
        { id: 3, itemId: 1, price: 8.34, },  // <-- Add this
        { id: 4, itemId: 8, price: 10.25, }, // <-- Add this
      ],                                     // <-- Add this
      status: "completed"
    }
  }

  getSubtotal(order: any): number {
    return order?.items?.reduce((acc: number, item: any) =>
      acc + item.price, 0);
  }

  getTotal(order: any) {
    return this.getSubtotal(order) + order?.tax + order?.tip;
  }
}
