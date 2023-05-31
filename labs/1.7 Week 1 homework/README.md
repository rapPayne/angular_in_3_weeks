# Week 1 homework

## Calculating the order totals

The diners will be adding menu items to their orders. Let's add that to our hardcoded order so that we can do some calculations.

1. Edit `order.component.ts`. Make the order in ngOnInit look like this:
```typescript

```

And now that we've got some items, let's use those to get the order's sub-total and the order total, which is just the sub-total plus tax and tip.

2. In `order.component.ts`, create a new function called `getSubTotal()`. Have it iterate the `items` array and sum the price for each item.

See if you can write it yourself. But if you need help, here's a possible solution:

<detail>
<summary>Expand for a possible solution</summary>
```typescript
getSubtotal(order: any) {
  return order?.items?.reduce((acc: number, item: any) =>
    acc + item.price, 0);
}
```
</detail>

And here's another functional programming way of doing it.

<detail>
<summary>Expand for a very concise solution</summary>
```typescript
getSubtotal(order: any) {
  return order?.items?.reduce((acc: number, item: any) =>
    acc + item.price, 0);
}
```
</detail>

3. Now do the same for the `getTotal()` method. Again, it is adding the sub-total, the tax and the tip. See if you can write it yourself without peeking at the answer below.

<detail>
<summary>Expand for a possible solution</summary>
```typescript
getTotal(order: any) {
  return this.getSubtotal(order) + order.tax + order.tip;
}
```
</detail>

## Using the calculations
Now let's interpolate these functions on our HTML template.

1. Edit `order.component.html`. Put in two new lines, one for "Subtotal" and another for "Total". Call these functions from the HTML to calculate and display the values.

<detail>
<summary>Expand for a possible solution</summary>
```html
...
<p>Order time: {{ order.orderTime }}</p>
<p>Pickup time: {{ order.pickupTime }}</p>

<p class="money">Subtotal: {{ getSubtotal(order)  }}</p>
<p class="money">Tax: {{order.tax }}</p>
<p class="money">Tip: {{order.tip }}</p>
<p class="money total">Total: {{ getTotal(order) }}</p>
<a [routerLink]="'/orders'">Back to orders</a>
```
</detail>

2. Run and view in the browser.

3. Bonus!! Add the CSS classes like you see in my code snippet above ("money" and "total"). We'll use those when we get to styling.

Nicely done. See you back in class soon!
