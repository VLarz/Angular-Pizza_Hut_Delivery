import { Component, OnInit } from '@angular/core';
import { PizzaOrderService } from '../services/pizza-order.service';
import { PizzaOrder } from '../models/pizza-order.model';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {

  pizzaOrders: PizzaOrder[] = [];
  constructor(private pizzaOrderService: PizzaOrderService) { }

  ngOnInit(): void {
    this.pizzaOrderService.getPizzaOrders().subscribe(orderData => {
      this.pizzaOrders = orderData;
      console.log(this.pizzaOrders);
    });

  }

}
