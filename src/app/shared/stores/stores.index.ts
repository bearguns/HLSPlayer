import { streamsReducer } from './streams/streams.reducer';
import { selectedStreamReducer } from './selected-stream/selected-stream.reducers';

export const reducers = {
  streams:        streamsReducer,
  selectedStream: selectedStreamReducer
};
