import * as SelectedStreamActions from '../actions/selected-stream.actions';
import { Stream } from '../models/stream';


export const selectedStreamReducer = (state: Stream, action: SelectedStreamActions.Actions) => {
  switch (action.type) {
    case SelectedStreamActions.SET_SELECTED_STREAM:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

