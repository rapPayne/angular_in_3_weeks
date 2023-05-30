import { HttpClient } from '@angular/common/http';
import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: WritableSignal<any> = signal(undefined);
  error: WritableSignal<any> = signal(undefined);

  constructor(private _http: HttpClient) { }

  login(username: string, password: string) {
    this._http.post('/api/login', { username, password })
      .subscribe({
        next: (user) => this.user.set(user),
        error: (err) => this.error.set(err.error)
      });
  }

  logout() {
    this.user.set(undefined);
  }
}
