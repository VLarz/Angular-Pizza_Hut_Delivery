import { Component, OnInit } from '@angular/core';
import { PizzaOrderService } from '../../services/pizza-order.service';
import { PizzaOrder } from '../../models/pizza-order.model';

@Component({
  selector: 'app-pizza-order-list',
  templateUrl: './pizza-order-list.component.html',
  styleUrls: ['./pizza-order-list.component.scss']
})
export class PizzaOrderListComponent implements OnInit {

  pizzaOrders: PizzaOrder[] = [];
  constructor(private pizzaOrderService: PizzaOrderService) { }

  ngOnInit(): void {
    this.pizzaOrderService.getPizzaOrders().subscribe(orderData => {
      this.pizzaOrders = orderData;
      console.log(this.pizzaOrders);
    });
  }

}
