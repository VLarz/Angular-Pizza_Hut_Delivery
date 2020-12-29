import { PizzaOrder } from '../models/pizza-order.model';
import { Action } from '@ngrx/store';
import * as PizzaOrderActions from './pizza-order.actions';

export interface State {
  order: PizzaOrder;
}

const initialState: State = {
  order: null
};

export function pizzaOrderReducer(
    state = initialState,
    action: PizzaOrderActions.Types): State {
  switch (action.type) {
    default:
      return state;
  }
}
