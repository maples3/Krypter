import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import myReducer from './reducers';

export const store = createStore(myReducer, composeWithDevTools());
