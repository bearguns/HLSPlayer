import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as PlayerReducers from './player.reducer';
import { streamListReducer, selectedStreamReducer } from './stream.reducer';
import { Stream } from '../models/stream';
import { Player } from '../models/player';

export const reducers = {
  streamList: streamListReducer,
  selectedStream: selectedStreamReducer,
  player: PlayerReducers.reducer
}

export interface VideoPlayerState {
  readonly selectedStream: Stream,
  readonly streamList: Stream[],
  readonly player: Player
}

export const getVideoPlayerState = createFeatureSelector<VideoPlayerState>('videoPlayer');
export const getSelectedStreamState = createSelector(getVideoPlayerState, (state: VideoPlayerState) => state.selectedStream);
export const getStreamListState = createSelector(getVideoPlayerState, (state: VideoPlayerState) => state.streamList);
export const getPlayerState = createSelector(getVideoPlayerState, (state: VideoPlayerState) => state.player);
