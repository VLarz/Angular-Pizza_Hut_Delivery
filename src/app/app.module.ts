import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaComponent } from './components/pizza/pizza.component';
import { PizzaOrderListComponent } from './components/pizza/pizza-order-list/pizza-order-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    PizzaOrderListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
