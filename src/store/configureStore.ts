import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import mainReducer from './mainReducer';

export const store = createStore(mainReducer, composeWithDevTools());
