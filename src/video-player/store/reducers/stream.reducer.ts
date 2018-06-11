import * as StreamActions from '../actions/stream.actions';
import { Stream } from '../models/stream';

export const selectedStreamReducer = (state: Stream, action: StreamActions.Actions) => {
  switch (action.type) {
    case StreamActions.SET_SELECTED_STREAM:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export const fetchStreamsReducer = (state: string = '', action: StreamActions.Actions) => {
  switch (action.type) {
    case StreamActions.FETCH_STREAMS:
      return 'STREAMS FETCHED'
    default:
      return state;
  }
}

export const streamListReducer = (state: Stream[] = [], action: StreamActions.Actions) => {
  switch (action.type) {
    case StreamActions.SET_STREAMS:
      return [...state, ...action.payload]
    default:
      return state;
  }
};
