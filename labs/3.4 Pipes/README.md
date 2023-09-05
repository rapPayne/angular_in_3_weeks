
# Pipes
<!-- Time: YYmin -->

## Using the currency pipe
You probably noticed that the prices in the OrderComponent don't look very nice. We should make them look like money.

1. Edit `menu-item.component.html`. Change this
```html
<p class="price">{{ item.price }}</p>
```
2. to this:
```html
<p class="price">{{ item.price | currency }}</p>
```
3. Edit `order.component.html`. Add currency pipes to these lines:
```html
<p class="money">Subtotal: {{ getSubtotal(order()) |currency}}</p>
<p class="money">Tax: {{order().tax |currency}}</p>
<p class="money">Tip: {{order().tip |currency}}</p>
<p class="money total">Total: {{ getTotal(order()) |currency}}</p>
```
4. Run your app and look at any order. Much better, no?

## Using the date pipe
Similarly, the dates look pretty poor. We can fix their appearances with pipes also.

1. Edit `order.component.html` again. Find the order time and pickup times. Add pipes like this:
```html
<p>Order time: {{ order().orderTime | date }}</p>
<p>Pickup time: {{ order().pickupTime | date }}</p>
```
2. They're okay, I guess. But we can make them even better if we specify the format of the dates. Change them like so:
```html
<p>Order time: {{ order().orderTime | date:"h:mm a MMMM d" }}</p>
<p>Pickup time: {{ order().pickupTime | date:"h:mm a MMMM d" }}</p>
```
3. Run again. You like it better now?

## Writing a custom pipe
As you look at the order status. The values are kind of ugly. They say "readyForGuest" instead of "Ready for the guest" and "pickedUp" instead of "On its way to guest" (or whatever). Let's create a custom pipe that will clean those display values a bit.

1. Get to a command prompt/terminal and generate a pipe.
```bash
ng generate pipe OrderStatus
```
Remember to re-start your development server
```bash
npm start
```

2. Convert its input value according to a simple algorithm.
```typescript
export class OrderStatusPipe implements PipeTransform {
  translations: { [key: string]: string } = {
    new: 'Guest has placed the order',
    cooking: 'Cooking',
    readyForGuest: 'Ready for the guest',
    pickedUp: 'On its way!',
    delivered: 'Guest has their order',
    problem: 'Problem with the order',
    completed: 'Paid for. The order is closed.'
  };
  transform(value: string, ...args: unknown[]): string {
    return this.translations[value];
  }
}
```

3. Use it in `order.component.html` when we're displaying the order status:
```html
Status: {{ order.status | orderStatus }}
```

4. Run your app and look at some orders. Nice, right?

That's it! You're finished.