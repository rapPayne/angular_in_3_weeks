# Router intro
<!-- Time: 10min -->
In this lab we'll set up client-side routing with Angular router.

## Create the routing 
1. Create a new file in `src/app` called `app.router.ts`. Make it look like this:
```typescript
// All of these are needed below, so import them
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { OrdersComponent } from "./orders/orders.component";
import { OrderComponent } from "./order/order.component";
import { AreasComponent } from "./areas/areas.component";
import { LoginComponent } from "./login/login.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { LogoutComponent } from "./logout/logout.component";

// Create the routing table
const routes = [
  { path: '', component: HomeComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'orders/:orderId', component: OrderComponent },
  { path: 'areas', component: AreasComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '**', component: NotFoundComponent }
];

// Process the routes and export the routing module
export const routing = RouterModule.forRoot(routes);
```

Notice you're exporting an object called `routing`. When this is imported into our AppModule, it will establish routing. Let's do that.

2. Import  `routing` into `app.module.ts` along with RouterModule:
```typescript
imports: [
  BrowserModule,
  RouterModule,      //  <-- Needed for routing
  routing,           // <-- The routing table itself
],
```
Don't forget to import them at the top:
```typescript
import { routing } from './app.router';
import { RouterModule } from '@angular/router';
```

All that's left is to provide a place for the routed components to be drawn on the page. We'll make that place in the `app.component.html`. Instead of showing hardcoded components, let the router insert whatever component that the route determines. We need a `router-outlet`.

3. Edit app.component.html. Make the `<main>` look like this:
```html
<main>
  <router-outlet />  <!-- Change this line -->
</main>
```
And with that, you're ready to navigate around!

4. Refresh your site. Try out the nav menu at the top. Manually navigate to some of these components:

| Navigate to ...                                    | You'll see                         |
| -------------------------------------------------- | ---------------------------------- |
| [/](http://localhost:4200/)                        | The "home" component               |
| [/areas](http://localhost:4200/areas)              | AreasComponent                     |
| [/orders](http://localhost:4200/orders)            | OrdersComponent                    |
| [/orders/12345](http://localhost:4200/orders/12345) | The details for order number 12345 |
| [/login](http://localhost:4200/login)              | LoginComponent                     |
| [/logout](http://localhost:4200/logout)            | LogoutComponent                    |
| Literally anything other URL                       | NotFoundComponent                  |

Congrats! You've set up routing. In the next few chapters we'll make routing even better.
