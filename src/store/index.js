import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { initState } from './initState';
import { rootReducers } from './Reducers/rootReducers';
import thunkMiddleware from 'redux-thunk';

const composeEnhancers = composeWithDevTools(applyMiddleware(thunkMiddleware));

export const store = createStore(rootReducers, initState, composeEnhancers);
