import { combineReducers } from 'redux'
import { userReducer } from './userReducer'
import { ContentReducer } from './ContentReducer';
import { ConstsReducer } from './ConstsReducer';

export const rootReducers = combineReducers({
  admin: userReducer,
  content: ContentReducer,
  consts: ConstsReducer,
});
