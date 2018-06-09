import * as SelectedStreamActions from './selected-stream.actions';

export const selectedStreamReducer = (state = {}, action: SelectedStreamActions.SetSelectedStream) => {
  switch (action.type) {
    case SelectedStreamActions.SET_SELECTED_STREAM:
      return action.payload

    default:
      return state;
  }
}

