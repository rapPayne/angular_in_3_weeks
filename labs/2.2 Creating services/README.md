
# Creating services
<!-- Time: YYmin -->
In the last lab we got our order-reading code is working. But reading Ajax data should happen in a service, not a component. Components should [focus](https://en.wikipedia.org/wiki/Single-responsibility_principle) on presenting data to a user, not reading it. This complicates our component, making it rigid. Second, we may want to share that logic in other components. Let's fix that. We'll move it into a service.

## Generating Services
1. Get to a command prompt/terminal window. Execute this command:
```bash
ng generate service Orders
```
This will create `orders.service.ts`. Take a look at that file. Pretty simple, huh?

2. While we're here, let's create the two other services we'll need.
```bash
ng generate service Area
ng generate service Auth
```

Don't forget to restart your development server!
```bash
npm run start
```

## Fetching using a service

1. Inject a `HttpClient` into the orders.service.ts constructor. Don't forget to import HttpClient.
```typescript
constructor(private _http: HttpClient) { }
```

2. Create the getOrder method in the service. Have it return a observable. 
```typescript
getOrder(orderId: number) {
  return this._http.get(`/api/orders/${orderId}`)
}
```

3. Inject the service into `orders.component.ts`. You can remove the HttpClient if you like.
```typescript
constructor(
  private _ordersService: OrdersService,  //  <-- Add this
  private _activatedRoute: ActivatedRoute,
) { }
```

4. Change ngOnInit to use the service instead. Subscribe here.
```typescript
ngOnInit(): void {
  const orderId = this._activatedRoute.snapshot.params['orderId'];
  this._ordersService.getOrder(orderId).subscribe({
    next: (data) => { this.order = data; }
  });
}
```

5. Run your app. Your refactor worked if you can still navigate to different order by order number.

Note: If you ever subscribe to an observable, you should also unsubscribe to avoid memory leaks. We are not doing that here merely because we will soon change how we read. This new method won't require an unsubscribe.