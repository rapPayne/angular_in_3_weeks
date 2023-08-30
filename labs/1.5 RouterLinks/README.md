
# RouterLinks
<!-- Time: 10min -->

This topic is small but it has a _major_ impact on performance and operation. With routerLinks we avoid round-trips to the server and redundant reloads of your app.

## Changing the links to routerLinks.
1. Browse to the [home](http://localhost:4200) view. Open developer tools by hitting F12 on Windows or cmd-opt-i on Macs or by hitting the hamburger menu in your browser. Open the network tab. If there's any existing traffic logged, clear it out by hitting the clear button which looks like this

![clear](../assets/DevTools%20clear.png)

2. Now click on any link in the nav bar at the top. Look at how much traffic is in the network tab! That's because all clicks are re-loading the **entire** site!

3. Change your navbar, replacing all the `href`s with `[routerLink]`s. Do it on your own if possible, but if you need a reminder, look here:
<details>
<summary>Expand for a possible solution</summary>

```html
<nav>
  <a [routerLink]="'/'">Main</a>
  <a [routerLink]="'/orders'">Orders</a>
  <a [routerLink]="'/areas'">Areas</a>
  <a [routerLink]="'/logout'">Logout</a>
  <a [routerLink]="'/login'">Login</a>
  <span> Hello, {{ user.first }}!</span>
</nav>
```
Note the extra set of single quotes inside the double quotes now. These are needed for Angular's routing.
</details>

4. Clear out the network tab in the browser again. Navigate around using these routerlinks. Notice -- no trips to the server! We're staying client side.

## Navigating from the NotFoundComponent
1. Navigate to [http://localhost:4200/NonsenseURL](http://localhost:4200/NonsenseURL). The NotFoundComponent is displayed. That's good but this component is ugly.

2. Replace the entire contents of `not-found.component.html` with this.
```html
<h1>Oops! That url isn't on our site</h1>
<p>Maybe try one of these?</p>
<ul>
  <li><a [routerLink]="'/'">Home</a></li>
  <li><a [routerLink]="'/orders'">See current orders</a></li>
  <li><a [routerLink]="'/areas'">Choose your area</a></li>
</ul>
```

When your browser refreshes, you'll see we have a useful page for when our users get lost.

3. Try out those links and you'll see that their navigation is also well-behaved.
  
## Bonus! order.component.html
1. There's a link in `order.component.html`. Find it and fix it. Make it use a `[routerLink]` instead of `href`.