import { Action } from '@ngrx/store';
import { Streams } from '../models/streams';

export const FETCH_STREAMS = '[STREAMS] Fetch';
export const SET_STREAMS   = '[STREAMS] Set';

export class FetchStreams implements Action {
  readonly type = FETCH_STREAMS;
}

export class SetStreamsInStore implements Action {
  readonly type = SET_STREAMS;

  constructor(public payload: Streams['streams']) {}
}

export type Actions =
  FetchStreams |
  SetStreamsInStore
