import { createStore, combineReducers } from 'redux';
import myReducer from './reducers';

export type AppState = ReturnType<typeof myReducer>

export const store = createStore(myReducer);

