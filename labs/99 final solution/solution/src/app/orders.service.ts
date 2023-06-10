import { effect, WritableSignal, signal, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private interval: any;
  currentOrders: WritableSignal<any> = signal([]);  // All orders that a waiter cares about
  currentOrder: WritableSignal<any> = signal({});  // The order we're focusing on right now

  constructor(private _http: HttpClient) {
    effect(() => console.log(this.currentOrders()));
    const obs$ = this._http.get(`/api/orders/current`);
    this.interval = setInterval(() => {
      obs$.subscribe({
        next: (orders) => this.currentOrders.set(orders),
        error: (err) => console.log(err)
      });
    }, 10_000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  /**  Fetch an order by ID and set the currentOrder *signal* to that order. */
  setCurrentOrder(id: number) {
    this._http.get(`/api/orders/${id}`)
      .subscribe({
        next: (order) => this.currentOrder.set(order),
        error: (err) => console.log(err)
      });
  }

  /** Updates the order status */
  setStatusOnCurrentOrder(status: string) {
    this._http.patch(`/api/orders/${this.currentOrder().id}`, { status: status })
      .subscribe({
        next: () => this.currentOrder.set({ ...this.currentOrder(), status: status }),
        error: (err) => console.log(err)
      });
  }
}
