import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  order!: any;
  constructor(private _activatedRoute: ActivatedRoute, private _http: HttpClient) { }
  ngOnInit(): void {
    const orderId = this._activatedRoute.snapshot.params['orderId'];
    this._http.get(`http://localhost:3008/api/orders/${orderId}`).subscribe(
      {
        next: (data) => { this.order = data; }
      });
    // this.order = { id: orderId, }; // <-- Remove your hardcoded order
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

}
