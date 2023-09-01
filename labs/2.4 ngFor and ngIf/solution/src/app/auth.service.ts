import { HttpClient } from '@angular/common/http';
import { Injectable, WritableSignal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: WritableSignal<any> = signal(undefined);  // The logged-in user 
  error: WritableSignal<any> = signal(undefined); // An error message

  constructor(private _http: HttpClient) { }

  login(username: string, password: string) {
    this._http.post('/api/login', { username, password })
      .subscribe({
        next: (user) => this.user.set(user),  // On success, set the user signal
        error: (err) => this.error.set(err.error) // On failed, set error signal
      });
  }

  logout() {
    this.user.set(undefined);  // Set the user signal to nothing
  }
}