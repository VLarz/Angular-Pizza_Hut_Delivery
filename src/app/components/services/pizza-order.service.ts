import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { PizzaOrder } from '../models/pizza-order.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PizzaOrderService {

  constructor(private http: HttpClient) { }

  getPizzaOrders(): Observable<PizzaOrder[]> {
    return this.http.get<PizzaOrder[]>(`${environment.jsonPath}/pizza-orders.json`);
  }
}
