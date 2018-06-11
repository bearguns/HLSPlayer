import { streamsReducer } from './reducers/streams.reducer';
import { selectedStreamReducer } from './reducers/selected-stream.reducers';
import { reducer as videoPlayerReducer } from './reducers/video-player.reducer';

export const reducers = {
  streams: streamsReducer,
  selectedStream: selectedStreamReducer,
  videoPlayer: videoPlayerReducer
};
