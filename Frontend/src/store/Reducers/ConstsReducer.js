import { types } from '../types';
import { initState } from '../initState';

export const ConstsReducer = (state = initState.consts, action) => {
  switch (action.type) {
      case types.MODAL: 
      return {...state, modal: !state.modal};
      case types.FEEDBACK:
      return {...state, feedback: !state.feedback};
      default:
          return state;
  }
}
