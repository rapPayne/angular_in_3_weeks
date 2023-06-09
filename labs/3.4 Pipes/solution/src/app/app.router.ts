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
