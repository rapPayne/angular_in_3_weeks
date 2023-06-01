import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
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
      status: "completed"
    }
  }
}
