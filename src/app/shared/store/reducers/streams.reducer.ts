import * as StreamsActions from '../actions/streams.actions';

export const streamsReducer = (state = [], action: StreamsActions.Actions) => {
  switch (action.type) {
    case StreamsActions.SET_STREAMS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
