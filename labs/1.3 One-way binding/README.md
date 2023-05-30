Do some interpolation.
All the interpolation.

# One-way binding
<!-- Time: YYmin -->

## Setting the year in the footer
Did you notice how badly out of date the year is in the footer? You'll have to change that every December 31 at midnight unless you allow Angular to change it automatically.

1. Edit app.component.html. Change this:
2. to this
3. It doesn't work because it is relying on a property in the business class called `today`. Let's establish that property. Edit app.component.ts. Add this:
Add `today: Date = new Date();`
  <p>Copyright &copy; {{ today.getFullYear() }} Dinner and a Movie</p>

## Interpolating the user's name

In the header, notice that there's a place for the user's name. Let's interpolate that. Replace this
USER_NAME_GOES_HERE
with this
{{ user?.name }}
Then in app.component.ts, add this:
user: any = {name: "Jo" }
Run and test.
Now put your name instead of "Jo". See how it uses that variable instead?

## Displaying a whole object
Let's tackle a big one! In the OrdersComponent, we're going to display an entire order. 

1. Edit order.component.ts. Make it look like this:
```typescript
<CODE HERE FOR CLASS WITH AN ORDER HARDCODED. >
NO NEED TO PUT IN THE ORDER ITEMS.
```
2. Now let's display it. Edit order.component.html. Replace its entire contents with this:
```html
<CODE HERE WITH ALL THE ORDER DETAILS>
DON'T ITERATE THE ITEMS HERE.
```
3. Ready to see it in the browser? You'll have to tell app.component.html to display it! Put it's tag in app.component.html:
```html
<app-order />
```
4. Look at it in a browser. Cool, right?

Eventually this order will not be hardcoded. We'll get the order ID from the user, read it from the API data server, and display it for the user.

Congrats! You're done.