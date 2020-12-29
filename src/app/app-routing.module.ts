import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PizzaOrderDetailComponent } from './components/pizza/pizza-order-detail/pizza-order-detail.component';
import { PizzaComponent } from './components/pizza/pizza.component';

const routes: Routes = [
  { path: '', redirectTo: 'order', pathMatch: 'full'},
  {
    path: 'order',
    component: PizzaComponent,
    children: [
      { path: ':id', component: PizzaOrderDetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
