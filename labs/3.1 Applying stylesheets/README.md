
# Applying stylesheets
<!-- Time: 10min -->

## Styling the entire app
Your Angular app has a default stylesheet. It will be called `styles.css` and is applied by default to every component. 

1. Make sure your app is running. Glance at it in the browser so you can see changes as they happen.

2. Find `styles.css`. Make it look like this.
```css
:root {
  font-family: Verdana, Geneva, Tahoma, sans-serif;

  --dark1: #202124;
  /* a black color */
  --dark2: #1a73e8;
  /* a blue color */
  --dark-danger: #B00020;
  /* a red color */
  --dark-success: #005500;
  /* a dark green color */
  --light1: #ffffff;
  /* a white color */
  --light2: #fbbc04;
  /* a yellow color */
  --light-danger: #FFCDD2;
  /* a pink color */
  --light-success: #c0ff00;
  /* a light green color */

  color: var(--dark1);
  background-color: var(--light1);
}

.danger {
  color: var(--dark-danger);
  background-color: var(--light-danger);
}

.success {
  color: var(--dark-success);
  background-color: var(--light-success);
}

.alert {
  padding: 15px;
  border: 2px solid var(--dark1);
  border-radius: 10px;
}

label {
  display: block;
}

input,
select {
  width: calc(100% - 10px);
  font-size: 1.1em;
  outline: none;
  padding: 5px;
}

button {
  padding: 10px;
  color: var(--dark2);
  background-color: var(--light2);
  border: none;
  border-radius: 5px;
  font-size: 1.1em;
}
```

3. When you hit save, check it out in a browser. You should see a huge difference on every page. Especially note the fonts and buttons.


## Styling the menu
1. Look at the top of any page. See the nav menu?

Yuck! Let's make it look better.

2. Edit `app.component.css`. Paste this in there.
```css
nav {
  background-color: var(--dark2);
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  & a,
  span {
    color: var(--light2);
    padding: 10px;
    text-transform: uppercase;
    text-decoration: none;
  }
}

main {
  padding-top: 30px;
}
```

3. Look again. Much better, right?


## Applying a class
Earlier in the course we set an error message if a login failed. Now let's make it look cool.

1. In `login.component.html`, add a class. Change this:
```html
<div>{{ error() }}</div>
```
To this:
```html
<div *ngIf="error()" class="danger alert">{{ error() }}</div>
```

Now if you put in a bad user/password combination, you'll see a much better message style. Test it out if you like by hardcoding a bad password into `login.component.ts` in the `login()` method.


## Styling the orders
1. View your [orders](http://localhost:4200/orders) in a browser. They're unstyled. 

These orders are kind of hard to use. We can make it more user-friendly by color-coding according to its status. Let's make problem orders red and readyForGuest orders green.

2. Edit `orders.component.ts` and create a function to intelligently return a CSS class:
```typescript
getCssClass(order: any) {
  if (order.status === 'readyForGuest') return 'success';
  if (order.status === 'problem') return 'danger';
  return '';
}
```

3. Now use that function in `orders.component.html` when drawing each order in the list:
```html
<div *ngFor="let order of orders()" [routerLink]="'/orders/'+order.id" [class]="getCssClass(order)">
  id: {{order.id}}
  area: {{order.area}}
  status: {{order.status}}
</div>
```

(Note that there's another way to do this with an [attribute directive](https://stackoverflow.com/a/41974490/88373). You may like it better.)

4. Browse to it now. You should see different background colors instantly.

5. Add this to `orders.component.css`:
```css
div {
  padding: 10px;
  margin: 10px;
  border: 1px solid var(--dark2);
}
```
6. Look again. Even better, right? It has nice borders and room around it now.


## Styling an order
Let's do one more.

1. View a single order in the browser. Other than the buttons, it looks pretty basic, doesn't it?

2. Edit `order.component.css` like so:
```css
.status-changing {
  padding: 5px;

  & button {
    margin: 10px;
  }
}

.money {
  text-align: right;
  font-weight: bold;
  font-size: 1.1em;
}

.total {
  border-top: 3px solid;
  font-size: xx-large;
}
```

3. Again, view in the browser. A little better, no?

Alright, your app is looking great! Feel free to change any styles you desire. Tune it to your own liking.
