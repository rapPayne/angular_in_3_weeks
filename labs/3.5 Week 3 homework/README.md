
## Bonus! Setting colors on the orders
Look at your list of orders. They all look the sam
Change your order line from this:
<CODE HERE>
to this:
<CODE HERE with the [class]="getCssClass(order)" added>

Add this to your orders.component.ts class:
```typescript
getCssClass(order: any) {
  if (order.status === 'readyForGuest') return 'success';
  if (order.status === 'problem') return 'danger';
  return '';
}
```

Note: There's a better way to do this using an [ngClass] directive. You can research that [here](https://angular.io/api/common/NgClass).

Bonus!! Move the fetch out of the button click and put it in a setInterval so taht it fetches every 30 seconds or so.
<CODE HERE>

In the orders.service.ts
expose a signal that setInterval reads the orders every 30,000 ms. Do we need a computed()? Or just a signal? Just a signal called orders. Then every 30 seconds we go orders.set(theOrders)\
In orders, call _ordersSvc.orders() to expose the orders. (I hope that's how it works)

RAP - GOTTA DO SOMETHING WITH A SIGNAL, LIKE WHEN A VALUE CHANGES, SOMETHING ELSE IS RUN VIA compute(). MAYBE THE NUMBER OF ORDERS? MAYBE THE LIST OF ORDERS? MAYBE CREATE A setInterval that hits the orders endpoint every 30 seconds?

# Letting the user log out
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

Challenge: Make the orders list look better. Extract each line into an OrderLine component.





## Bonus!! Using the area service
If you've got extra time, try to take on this challenge.

The orders view is working okay. But using 
Now that you've got a service and an areas signal, let's use it in Orders component.

Inject the area service into orders.component.ts:
```typescript
constructor(
  private _ordersService: OrdersService,
  private _areaService: AreaService,  // <-- Inject the Area service
) { }
```


Add these to areas.component.ts:
```typescript
  area!: Signal<string>;
  myOrders: Signal<any[]> = computed(() => this.orders()!.filter(order => order.area === this.area()));
  otherOrders: Signal<any[]> = computed(() => this.orders()!.filter(order => order.area !== this.area()));
```
Now you've got two lists of orders; one for your server's current area and one for everyone else's. Let's iterate through them.

Find where it says this:
```html
<div *ngFor="let order of orders()" [routerLink]="'/orders/'+order.id">
  id: {{order.id}}
  area: {{order.area}}
  status: {{order.status}}
</div>
```
And replace it with this
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





Bonus??? For password, use a signal to make sure it conforms to some password validation RegEx. 




