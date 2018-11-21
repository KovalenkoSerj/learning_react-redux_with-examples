import { combineReducers } from 'redux';
import { reducerA } from './reducerA';
import { reducerB } from './reducerB';

export const rootReducer = combineReducers({
	   reducerA,
	  reducerB
})