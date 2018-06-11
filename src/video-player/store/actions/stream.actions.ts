import { Action } from '@ngrx/store';
import { Stream } from '../models/stream';

export const FETCH_STREAMS = '[STREAMS] Fetch';
export const SET_STREAMS   = '[STREAMS] Set';
export const SET_SELECTED_STREAM  = '[STREAM] Set';

export class SetSelectedStream implements Action {
  readonly type = SET_SELECTED_STREAM;

  constructor(public payload: Stream) { }
}

export class FetchStreams implements Action {
  readonly type = FETCH_STREAMS;
  constructor() {}
}

export class SetStreamsInStore implements Action {
  readonly type = SET_STREAMS;

  constructor(public payload: Stream[]) {}
}

export type Actions =
  FetchStreams |
  SetStreamsInStore |
  SetSelectedStream;
