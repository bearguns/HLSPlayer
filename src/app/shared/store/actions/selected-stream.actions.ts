import { Action } from '@ngrx/store';
import { Stream, StreamStatus } from '../models/stream';

export const SET_SELECTED_STREAM  = '[STREAM] Set';
export const CHANGE_STREAM_STATUS = '[STREAM] Change Status';

export class SetSelectedStream implements Action {
  readonly type = SET_SELECTED_STREAM;

  constructor(public payload: Stream) { }
}


export type Actions =
  SetSelectedStream;
