import { Action } from '@ngrx/store';
import { Player, PlayerStatus } from '../models/player'
import * as VideoPlayerActions from '../actions/player.actions'

const InitialState: Player = {
  status: PlayerStatus.PAUSED,
  selectedLevel: 0,
  duration: 0
}

export const reducer = (state: Player = InitialState, action: VideoPlayerActions.Actions) => {
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
