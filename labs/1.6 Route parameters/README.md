  
# Route parameters
<!-- Time: 10min -->

Remember that we created a route (/orders/:id) with a route parameter. Let's enable the OrderComponent to read that route parameter. This way, if the user browses to /orders/1337, they'll see the details for order number 1337 and if they browse to /order/42, they'll see the details for order 42.

## Quick review

1. Remember, you're hardcoding order 20254 in order.component.ts. You're using it in order.component.html.
```html
<h2>Order number: {{ order?.id }}</h2>
```

2. Run and visit [http://localhost:4200/orders/1337](http://localhost:4200/orders/1337) you'll see Order 20254 in the `<h2>`

But wait! We're supposed to be seeing 1337 as the order number, not 20254. Let's fix that.

## Getting the orderId from the URL

1. Add to the top of order.component.ts:
```typescript
import { ActivatedRoute } from '@angular/router';
```

2. Inject ActivatedRoute into the constructor and read the route param:
```typescript
constructor(private _activatedRoute: ActivatedRoute) {
  const orderId = this._activatedRoute.snapshot.params['orderId'];
  this.order = { id: orderId, };
}
```

3. Run and visit [http://localhost:4200/orders/1337](http://localhost:4200/orders/1337). Hey, there's order 1337 in the `<h2>`. Try it again with different order numbers. Of course all of the other hardcoded values are still there. We'll read those from our API data server later.

## Using ngOnInit
This last step is optional. It's a good practice to keep your constructor small. Angular components have a lifecycle method called `ngOnInit` which is run immediately after the constructor.

1. Create a new method called ngOnInit.

2. Move all the logic out of the constructor and into this new method:
```typescript
export class OrderComponent {
  order!: any;
  constructor(private _activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    const orderId = this._activatedRoute.snapshot.params['orderId'];
    this.order = {
      id: orderId,
      orderTime: "2099-03-30T18:26:13.161Z",
      pickupTime: "2099-03-30T18:38:03.286Z",
      area: "Theater 1",
      location: "Table 6",
      tax: 3.89,
      tip: 9.44,
      status: "completed"
    }
  }
}
```

3. Run to make sure your refactored code is still working.
