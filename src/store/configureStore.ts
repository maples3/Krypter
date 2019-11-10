import { createStore } from 'redux';
import myReducer from './reducers';

export const store = createStore(myReducer);

