
# Week 3 homework
Here are some further exercises for you to reinforce the Angular concepts after the class. If you need help with them, reach out to your instructor.

## Letting the user log out
We've allowed the user to log in but not to log out. Let's fix that. We know they're logged in when AuthService's `user` property is not undefined. So to log out will be simple.

1. Edit `logout.component.ts`. Import and inject the AuthService. In `ngOnInit`, call the AuthService's `logout()` method.
<details>
<summary>Expand for a possible solution</summary>

```typescript
export class LogoutComponent {
  constructor(
    private _authService: AuthService) { }

  ngOnInit() {
    this._authService.logout();
  };
}
```
</details>

2. While we're at it, we should also clear out the area. Inject the AreaService and set it's `area` property to `""` (the empty string).

<details>
<summary>Expand for a possible solution</summary>

```typescript
export class LogoutComponent {
  constructor(
    private _authService: AuthService,
    private _areaService: AreaService) { }

  ngOnInit() {
    this._authService.logout();
    this._areaService.area.set("");
  };
}
```
</details>

3. And lastly, let's forward them to the `/login` route to let them know it was successful and that they can log in as a different user if they like.
<details>
<summary>Expand for a possible solution</summary>

```typescript
export class LogoutComponent {
  constructor(
    private _authService: AuthService,
    private _areaService: AreaService,
    private _router: Router) { }

  ngOnInit() {
    this._authService.logout();
    this._areaService.area.set("");
    this._router.navigate(['/login']);
  };
}
```
</details>


## Splitting the order list into 'mine' and 'not mine'
The orders view is working okay. But using it isn't easy. Each waiter sees all the orders and they have to search through the list for the orders in their area. We have an orders signal with all the orders and an area signal with the waiter's current area. Let's show them their orders at the top and everyone else's at the bottom.

1. Add these to areas.component.ts:
```typescript
  myOrders: Signal<any[]> = computed(() => this.orders()?.filter(order => order.area === this.area()));
  otherOrders: Signal<any[]> = computed(() => this.orders()?.filter(order => order.area !== this.area()));
```
Remember, a `computed` returns a new signal that watches an earlier one. Now you've got two lists of orders; one for your server's current area and one for everyone else's. Let's iterate through them.

2. Find where it says this:
```html
<div *ngFor="let order of orders()" [routerLink]="'/orders/'+order.id">
  id: {{order.id}}
  area: {{order.area}}
  status: {{order.status}}
</div>
```
And split that one list into two, one for `myOrders` and another for `otherOrders`. Let's see if you can figure it out on your own but if you need some help, peek at the solution below.
<details>
<summary>Expand for a possible solution</summary>

```html
<h1>My orders</h1>
<div *ngFor="let order of myOrders()" [routerLink]="'/orders/'+order.id" [class]="getCssClass(order)">
  id: {{order.id}}
  area: {{order.area}}
  status: {{order.status}}
</div>

<h1>Other orders</h1>
<div *ngFor="let order of otherOrders()" [routerLink]="'/orders/'+order.id" [class]="getCssClass(order)">
  id: {{order.id}}
  area: {{order.area}}
  status: {{order.status}}
</div>
```
</details>


## Refreshing the orders automatically
This app reads from a centralized database through an API server. There may be many different waiters using the app simultaneously. A waiter may see an order that is ready to be picked up but by the time they get there, another waiter may have picked it up. Oh sure, they could just hit the refresh button (F5) every so often. But how great would it be if we could tell our OrdersService to update itself automatically every 30 seconds or every 10 seconds?

We'll probably want to change only the `orders.service.ts` file. We'll want to use a `setInterval`. And we'll merely set the signal. Because it is a signal, the component that is watching that signal will re-render itself as soon as the signal changes.

This one is a challenge with no instructions. See if you can make it happen without any direction. Please connect with Rap if you're able to figure it out. I'd love to see your solution!

Some hints, though. Services do not have lifecycle methods, but components do, so maybe create a method in OrdersService to clearInterval() and call it from the OrdersComponent's onDestroy() lifecycle method.