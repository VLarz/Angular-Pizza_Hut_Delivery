import { Action } from '@ngrx/store';

export const GET_INDEX = '[Pizza Order] Get Index';

export class GetIndex implements Action {
  readonly type = GET_INDEX;

  constructor(public payload: number) {}
}

export type Types = GetIndex;
