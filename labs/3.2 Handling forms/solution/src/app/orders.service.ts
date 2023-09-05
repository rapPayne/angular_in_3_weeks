import { effect, Signal, WritableSignal, signal, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  currentOrders!: Signal<any>;  // All orders that a waiter cares about
  currentOrder: WritableSignal<any> = signal({});  // The order we're focusing on right now

  constructor(private _http: HttpClient) {
    const obs$ = this._http.get(`/api/orders/current`);
    this.currentOrders = toSignal(obs$);  // Converting the observable to a signal
    effect(() => console.log(this.currentOrders())); // <- Add this line
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