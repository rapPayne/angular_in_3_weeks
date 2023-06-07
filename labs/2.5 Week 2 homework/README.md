# Week 2 homework


## Reinforcing signals and *ngIf
When looking at their orders, our waiters should be able to see what area they've chosen. We're going to add a notice to their orders list showing what area they've chosen.

1. First we have to define a `area` variable to show. Edit `orders.component.ts` and add it:
```typescript
export class OrdersComponent {
  orders: Signal<any[]> = signal([]);
  area: Signal<string> = this._areaService.area; // <-- Add the area signal

  constructor(
    private _ordersService: OrdersService,
    private _areaService: AreaService,  // <-- Inject the Area service
  ) { }
```
Whenever `AreaService.area` changes, our `area` will be notified and will update. This is because `area` is a signal. 

Now we just need to show it to the user.

2. Edit `orders.component.html`. Add a `<p>` to the top that tells the user their area. (Hint: You'll want to interpolate `area` inside double-curly braces. Also, don't forget that `area` is a **signal** that contains a string.)
<details>
<summary>Expand for a possible solution</summary>
```html
<p>Your area is {{ area() }}</p>
```
</details>

3. Now make that paragraph appear only if the `area` signal has something in it. (Hint: Use *ngIf.)
<details>
<summary>Expand for a possible solution</summary>
```html
<p *ngIf="area()">Your area is {{ area() }}</p>
```
</details>

4. Lastly, let's put something on the page if there's no area choses. Tell the waiter to go to `/areas` to choose an area. (Hints: Use an `else` in your *ngIf and create a `ng-template`.)
<details>
<summary>Expand for a possible solution</summary>
```html
<p *ngIf="area() ; else noArea">Your area is {{ area() }}</p>
<ng-template #noArea>
  <p>You are not assigned to an area. Click <a [routerLink]="'/areas'">here</a> to claim one.</p>
</ng-template>
```
</details>


## Conditional display in the nav menu
Take a look at the navigation menu at the top of your app. Some of those options don't make sense. I mean, what's the point of showing "Login" if the user is already logged in? And we can't really show "Orders" if the user is not logged in. Let's fix that.

All you're going to do is edit `app.component.html` and add `*ngIf` conditions to each of the `<a [routerLink]="whatever">` tags.

1. If the user is logged in, show "Orders", "Areas", "Logout", and the greeting `<span>` that says hello to the user. (Hint: The `user` signal will have something in it.)
2. If the user is NOT logged in, show "Login". (Hint: The `user` signal will be undefined.)
3. Note that the "Main" option should show no matter what. Make sure there's no condition on it appearing.

<details>
<summary>Expand for a possible solution</summary>
```html
<nav>
  <a [routerLink]="'/'">Main</a>
  <a *ngIf="user()" [routerLink]="'/orders'">Orders</a>
  <a *ngIf="user()" [routerLink]="'/areas'">Areas</a>
  <a *ngIf="user()" [routerLink]="'/logout'">Logout</a>
  <a *ngIf="!user()" [routerLink]="'/login'">Login</a>
  <span *ngIf="user()"> Hello, {{ user().first }}!</span>
</nav>
```
</details>

Here's a different method.
<details>
<summary>Expand for a possible solution</summary>
```html
<nav *ngIf="user()">
  <a [routerLink]="'/'">Main</a>
  <a [routerLink]="'/orders'">Orders</a>
  <a [routerLink]="'/areas'">Areas</a>
  <a [routerLink]="'/logout'">Logout</a>
  <span> Hello, {{ user().first }}!</span>
</nav>
<nav *ngIf="!user()">
  <a [routerLink]="'/'">Main</a>
  <a [routerLink]="'/login'">Login</a>
</nav>
```
</details>


## When you log in, auto-navigate to "/"
Our current login process "authenticates" the user when they hit the login button. But we're not giving them any indication that their login was successful. Hey, let's forward them to the HomeComponent when their login is successful.

You're probably thinking "I'll put something behind the login button's click event." But there's a more reactive way. Add a signal effect to the LoginComponent that says when the `user` signal changes, we navigate to the `'/'` route.

1. Edit `login.component.ts` and find the constructor.
2. Inject a `Router` service. (Hint: you'll have to `import { Router } from '@angular/router'`).
3. Also in the constructor add a signal **effect**. It should check `this._authService.user()` and if it is truthy, navigate home.

See if you can figure this out yourself without peeking, but in case you need a little help, look here:

<details>
<summary>Expand for a possible solution</summary>
```typescript
constructor(
  private _authService: AuthService,
  private _router: Router) {
  // If user changes, navigate to home
  effect(() => {
    console.log('changing user: ', this._authService.user());
    if (this._authService.user())
      this._router.navigate(['/']);
  });
}
```
</details>

This solution is more concise but may be harder to read.
<details>
<summary>Expand for a possible solution</summary>
```typescript
constructor(private _authService: AuthService, private _router: Router) {
  effect(() => (_authService.user()) && this._router.navigate(["/"]))
}
```
</details>