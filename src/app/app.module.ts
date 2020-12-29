import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaOrderDetailComponent } from './components/pizza/pizza-order-detail/pizza-order-detail.component';
import { PizzaOrderListComponent } from './components/pizza/pizza-order-list/pizza-order-list.component';
import { PizzaComponent } from './components/pizza/pizza.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    PizzaOrderListComponent,
    PizzaOrderDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
