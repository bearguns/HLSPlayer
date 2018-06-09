import { Action } from '@ngrx/store';

export const SET_SELECTED_STREAM = 'SET_SELECTED_STREAM';

export class SetSelectedStream implements Action {
  readonly type = SET_SELECTED_STREAM;

  constructor(public payload: any) { }
}
