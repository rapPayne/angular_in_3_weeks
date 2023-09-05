import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './app.router';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AreasComponent } from './areas/areas.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderComponent } from './order/order.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AreasComponent,
    OrdersComponent,
    OrderComponent,
    LoginComponent,
    LogoutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,  //  <-- Import HttpClientModule
    RouterModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
