# Week 1 homework

## Calculating the order totals

The diners will be adding menu items to their orders. Let's add that to our hardcoded order so that we can do some calculations.

1. Edit `order.component.ts`. Make the order in `ngOnInit` look like this:
```typescript
this.order = {
  id: orderId,
  orderTime: "2099-03-30T18:26:13.161Z",
  pickupTime: "2099-03-30T18:38:03.286Z",
  area: "Theater 1",
  location: "Table 6",
  tax: 3.89,
  tip: 9.44,
  items: [                               // <-- Add this
    { id: 1, itemId: 9, price: 11.75, }, // <-- Add this
    { id: 2, itemId: 1, price: 9.54,},   // <-- Add this
    { id: 3, itemId: 1, price: 8.34, },  // <-- Add this
    { id: 4, itemId: 8, price: 10.25, }, // <-- Add this
  ],                                     // <-- Add this
  status: "completed"
}
```

And now that we've got some items, let's use those to get the order's sub-total and the order total, which is just the sub-total plus tax and tip.

2. In `order.component.ts`, create a new function called `getSubTotal()`. Have it iterate the `items` array and sum the price for each item.

See if you can write it yourself. But if you need help, here's a possible solution:

<details>
<summary>Expand for a possible solution</summary>

```typescript
getSubtotal(order: any): number {
  if (!order?.items) return 0;
  let total = 0;
  for (let item of order.items) {
    total += item.price;
  }
  return total;
}
```
</details>

And here's another functional programming way of doing it.

<details>
<summary>Expand for a very concise solution</summary>

```typescript
getSubtotal(order: any): number {
  return order?.items?.reduce((acc: number, item: any) =>
    acc + item.price, 0);
}
```
</details>

3. Now do the same for the `getTotal()` method. Again, it is adding the sub-total, the tax and the tip. See if you can write it yourself without peeking at the answer below.

<details>
<summary>Expand for a possible solution</summary>

```typescript
getTotal(order: any) {
  return this.getSubtotal(order) + order?.tax + order?.tip;
}
```
</details>

## Using the calculations
Now let's interpolate these functions on our HTML template.

1. Edit `order.component.html`. Put in two new lines, one for "Subtotal" and another for "Total". Call these functions from the HTML to calculate and display the values.

<details>
<summary>Expand for a possible solution</summary>

```html
...
<p>Order time: {{ order?.orderTime }}</p>
<p>Pickup time: {{ order?.pickupTime }}</p>

<p class="money">Subtotal: {{ getSubtotal(order)  }}</p>  <!-- Add this line -->
<p class="money">Tax: {{order?.tax }}</p>
<p class="money">Tip: {{order?.tip }}</p>
<p class="money total">Total: {{ getTotal(order) }}</p>   <!-- Add this line -->
<a [routerLink]="'/orders'">Back to orders</a>
```
</details>

2. Run and view in the browser. You should get a sub-total of about $39.88 and a total of about $53.21. Don't worry about rounding errors or formatting for now. We'll fix that later. (Or you can study Angular pipes if you like).

Nicely done. See you back in class soon!
