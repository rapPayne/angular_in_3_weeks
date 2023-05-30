import { HttpClient } from '@angular/common/http';
import { Injectable, Injector, Signal, WritableSignal, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  currentOrders!: Signal<any>;
  currentOrder: WritableSignal<any> = signal({});  // The order we're focusing on right now

  constructor(private _http: HttpClient) {
    const obs$ = this._http.get(`/api/orders/current`);
    this.currentOrders = toSignal(obs$)
    effect(() => console.log(this.currentOrders()));
  }

  setCurrentOrder(id: number) {
    //TODO: RAP, do I have to pipe it to a take(1) or first to have it unsubscribe?
    this._http.get(`/api/orders/${id}`)
      .subscribe({
        next: (order) => this.currentOrder.set(order),
        error: (err) => console.log(err)
      });
    console.log('set current order', id)
  }

  setStatusOnCurrentOrder(status: string) {
    this._http.patch(`/api/orders/${this.currentOrder().id}`, { status: status })
      .subscribe({
        next: () => this.currentOrder.set({ ...this.currentOrder(), status: status }),
        error: (err) => console.log(err)
      });
  }

}
