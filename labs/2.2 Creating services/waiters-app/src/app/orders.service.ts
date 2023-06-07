import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private _http: HttpClient) { }

  getOrder(orderId: number) {
    return this._http.get(`/api/orders/${orderId}`)
  }
}
