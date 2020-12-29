import { PizzaOrder } from '../models/pizza-order.model';
import { Action } from '@ngrx/store';

export interface State {
  order: PizzaOrder;
}

const initialState: State = {
  order: null
};

export function pizzaOrderReducer(state = initialState, action: Action): State {
  switch (action.type) {
    default:
      return state;
  }
}
