import { HttpClient } from '@angular/common/http';
import { Injectable, WritableSignal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: WritableSignal<any> = signal(undefined);
  error: WritableSignal<any> = signal(undefined); // An error message
  constructor(private _http: HttpClient) { }

  login(username: string, password: string): void {
    this.user.set(undefined)
    this.error.set(undefined)
    this._http.post(`/api/login`, { username, password })
      .subscribe({
        next: user => {
          this.user.set(user);
          console.log("user is set to ", this.user())
        },
        error: err => this.error.set(`Problem logging in: ${err.error}`),
      });
  }

  logout(): void {
    this.user.set(undefined);
  }
}
