import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderComponent } from './order/order.component';
import { LoginComponent } from './login/login.component';
import { AreasComponent } from './areas/areas.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { routing } from './app.router';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { OrderStatusPipe } from './order-status.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrdersComponent,
    OrderComponent,
    LoginComponent,
    AreasComponent,
    NotFoundComponent,
    LogoutComponent,
    MenuItemComponent,
    OrderStatusPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,  //  <-- Import HttpClientModule
    RouterModule,      //  <-- Needed for routing
    routing,           // <-- The routing table itself
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
