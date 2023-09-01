# Signals
<!-- Time: 20min -->

## Refactoring the order observable to a signal
Our order observable has a problem; a memory leak. We've forgotten to unsubscribe! We could  unsubscribe OR we could convert it to a signal.

1. Edit `orders.service.ts`. Make it look like this:
```typescript
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
```

## Using that signal
1. Get `order.component.ts` ready to use the signal.
```typescript
export class OrderComponent {
  order: WritableSignal<any> = this._ordersService.currentOrder;  // <-- Change this line
  items: WritableSignal<any> = signal([{}])                       // <-- Add this line
```
Don't forget your imports for WritableSignal and signal.

Notice what is happening. We're tying `order` to the OrderService's currentOrder signal. So all we have to do is tell the OrdersService to set it's currentOrder and our component will be notified when that value is set.

2. In order.component.ts's `ngOnInit`, tell the service that you want it to update its own currentOrder:
```typescript
ngOnInit(): void {
  const orderId = this._activatedRoute.snapshot.params['orderId'];
  this._ordersService.setCurrentOrder(orderId);  // <-- Change this call
}
```

If you test right now, it won't work because `order.component.ts` is now dealing with an order *signal* but `order.component.html` is still using an order *object*.

3. Go through `order.component.html` and change everywhere it says `order` to `order()`. For example where it says
```html
<h2>Order {{ order?.id }}</h2>
<p>Area: {{ order?.area }}</p>
<p>Location: {{ order?.location }}</p>
<p>Status: {{ order?.status }}</p>
```
change it to say
```html
<h2>Order {{ order().id }}</h2>
<p>Area: {{ order().area }}</p>
<p>Location: {{ order().location }}</p>
<p>Status: {{ order().status }}</p>
```
But of course, do all of them.

4. That should do it. Run and browse to as many orders as you like.

5. Bonus!! Add an effect to the constructor in `orders.service.ts`:
```typescript
  constructor(private _http: HttpClient) {
    const obs$ = this._http.get(`/api/orders/current`);
    this.currentOrders = toSignal(obs$)
    effect(() => console.log(this.currentOrders())); // <- Add this line
  }
```
6. Run it again and you'll see that every time the orders signal changes, it will console.log() those new orders. This is reactive programming.

## Setting the user
Let's do another simple service with signals. We're going to simulate a login and logout. Your instructions will leave out some detail to make you think more.

1. Edit your `auth.service.ts` service. Make a signal called user that will contain the info for the currently logged-in user.
```typescript
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
```
When this service is injected into any component, it will have access to the `user` signal and if any component sets that signal all the others will be able to see it. We'll set it in Login and Logout and read it in the others.

2. Allow them to log in. Edit `login.component.ts`:
```typescript
export class LoginComponent {
  error = this._authService.error;

  constructor(private _authService: AuthService) { }

  login() {
    this._authService.login("server1", "bad-password");  // Hardcode the credentials for now
  }
}
```

3. Wire it up in `login.component.html`. On the button click, make it call the login() function:
```html
<button (click)="login()">Login</button>
<div>{{ error() }}</div>
```
- If there's a problem logging in, the error signal will appear in this div.

4. Try it out. Click the button. You should see an error in the div because we gave it a bad password.

5. Change the password to "pass" and run it again. Now when you click the button, you're logged in.

Let's prove it!

6. Edit `app.component.ts`. Make it look like this:
```typescript
export class AppComponent {
  today: Date = new Date();
  user = this._authSvc.user;  // Set our user to the service's user signal

  constructor(private _authSvc: AuthService) { }   // Inject AuthService
}
```

7. And let's show that variable. Edit `app.component.html`. Change this:
```html
<span> Hello, {{ user.first }}!</span>
```
to this:
```html
<span> Hello, {{ user()?.first }}!</span>  <!-- Add parentheses b/c it's a signal -->
```

8. Run your app. Log in. Then look in the menu at the top. You'll see it is greeting you by the name "Jo". If you use "server2" and password "pass", you'll see it is a different first name.

So much more we'll do with signals later. That's enough for now.
