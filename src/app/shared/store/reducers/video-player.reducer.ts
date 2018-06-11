import { Action } from '@ngrx/store';
import { VideoPlayer, VideoPlayerStatus } from '../models/video-player';
import * as VideoPlayerActions from '../actions/video-player.actions';

const InitialState: VideoPlayer = {
  status: VideoPlayerStatus.PAUSED,
  selectedLevel: 0,
  duration: 0
}

export const reducer = (state: VideoPlayer = InitialState, action: VideoPlayerActions.Actions) => {
  switch (action.type) {
    case VideoPlayerActions.CHANGE_STATUS:
      return { ...state, status: action.payload };
    case VideoPlayerActions.CHANGE_LEVEL:
      return { ...state, level: action.payload };
    case VideoPlayerActions.SET_AVAILABLE_LEVELS:
      return { ...state, levels: action.payload }
    default:
      return state;
  }
}
