import * as StreamsActions from './streams.actions';

export const streamsReducer = (state = [], action: StreamsActions.FetchStreams) => {
  switch (action.type) {
    case StreamsActions.FETCH_STREAMS:
      return [...state, ...action.payload];

    default:
      return state;
  }
};
