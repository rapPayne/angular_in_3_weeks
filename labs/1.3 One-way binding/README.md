
# One-way binding
<!-- Time: 15min -->

## Setting the year in the footer
Did you notice how badly out of date the year is in the footer? You'll have to change that every December 31 at midnight unless you allow Angular to change it automatically.

1. Edit `app.component.html`. Change the `<p>` in the `<footer>` like so:
```html
<p>Copyright &copy; {{ today.getFullYear() }} Dinner and a Movie</p>
```

It doesn't work because it is relying on a property in the business class called `today`. Let's establish that property. 

2. Edit `app.component.ts`. Add this in the class:
```typescript
today: Date = new Date();
```

3. View your app in a browser. Because of the interpolation, the date will always be evaluated live. Any expression can be evaluated this way.

## Interpolating the user's name

Let's say that we want our app to greet the user by name. In the page header, let's put a place for the user's name. 

1. Add a user's first name placeholder to the header: 
```html
    <a href="'/login'">Login</a>
    <span> Hello, {{ user.first }}!</span>  <!-- Add this line -->
  </nav>
</header>
```

2. Then in `app.component.ts`, add this:
```typescript
user: any = { first: "Jo" }
```

3. View it in the browser. Try putting your name in `app.component.ts` instead of "Jo". See how it uses that variable instead?

## Displaying a whole object
Let's tackle a big one. In the OrderComponent, we're going to display an entire order. 

1. Edit `order.component.ts`. Make the class look like this:
```typescript
export class OrderComponent {
  order: any = {
    id: 20254,
    orderTime: "2099-03-30T18:26:13.161Z",
    pickupTime: "2099-03-30T18:38:03.286Z",
    area: "Theater 1",
    location: "Table 6",
    tax: 3.89,
    tip: 9.44,
    status: "completed"
  }
}
```

2. Now let's display that order. Edit `order.component.html`. Replace its entire contents with this:
```html
<h2>Order {{ order?.id }}</h2>

<p>Area: {{ order?.area }}</p>
<p>Location: {{ order?.location }}</p>
<p>Status: {{ order?.status }}</p>

<p>Order time: {{ order?.orderTime }}</p>
<p>Pickup time: {{ order?.pickupTime }}</p>

<p>Tax: {{ order?.tax }}</p>
<p>Tip: {{ order?.tip }}</p>
<a href="/orders">Back to orders</a>
```

3. Ready to see it in the browser? You'll have to tell app.component.html to display it. Put it's tag in `app.component.html`:
```html
<app-order />
```

4. Look at it in a browser. Cool, right?

Eventually this order will not be hardcoded. Our user will give us the order ID, we'll use it to read the order from the API data server, and display it for the user.
