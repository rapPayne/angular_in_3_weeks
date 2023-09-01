import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private _http: HttpClient) { }

  getOrder(orderId: number) {
    return this._http.get(`/api/orders/${orderId}`)
  }
}
