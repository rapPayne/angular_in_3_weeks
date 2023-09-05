import { effect, Signal, WritableSignal, signal, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  currentOrders: WritableSignal<any> = signal([]);   // All orders that a waiter cares about
  currentOrder: WritableSignal<any> = signal({});  // The order we're focusing on right now
  private _intervalId?: any;

  constructor(private _http: HttpClient) {
    effect(() => console.log(this.currentOrders()));
    // No need to manually unsubscribe from a _http.get() observable; HttpClient auto-unsubscribes after emitting a single value.
    this._http.get(`/api/orders/current`)
      .subscribe({
        next: orders => this.currentOrders.set(orders)
      });
  }

  startMonitoringOrders(intervalInMilliseconds: number = 5000) {
    this._intervalId = setInterval(() => {
      fetch(`/api/orders/current`)
        .then(res => res.json())
        .then(orders => this.currentOrders.set(orders))
    }, intervalInMilliseconds);
  }

  stopMonitoringOrders() {
    clearInterval(this._intervalId);
  }

  /** Fetch an order by ID and set the currentOrder *signal* to that order. */
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