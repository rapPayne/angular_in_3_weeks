import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [RouterModule, HttpClientModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  order!: any;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _http: HttpClient //  <-- Add this
  ) { }
  ngOnInit(): void {
    const orderId = this._activatedRoute.snapshot.params['orderId'];
    this._http.get(`http://localhost:3008/api/orders/${orderId}`).subscribe(
      {
        next: (data) => { this.order = data; console.log(this.order) }
      });
    // this.order = { id: orderId, }; // <-- Remove your hardcoded order
  }

  getSubtotal(order: any): number {
    return order?.items?.reduce((acc: number, item: any) =>
      acc + item.price, 0);
  }

  getTotal(order: any) {
    return this.getSubtotal(order) + order?.tax + order?.tip;
  }
}
