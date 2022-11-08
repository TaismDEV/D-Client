import { types } from '../types';
import { initState } from '../initState';

export const ContentReducer = (state = initState, action) => {
  switch (action.type) {
      case types.ADD_ADMIN: 
      return {...state, username: action.payload.username, email: action.payload.email};
      default:
          return state;
  }
}
