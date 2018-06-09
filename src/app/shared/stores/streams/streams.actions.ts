import { Action } from '@ngrx/store';

export const FETCH_STREAMS = 'FETCH_STREAMS';

export class FetchStreams implements Action {
  readonly type = FETCH_STREAMS;

  constructor(public payload: any) { }
}
