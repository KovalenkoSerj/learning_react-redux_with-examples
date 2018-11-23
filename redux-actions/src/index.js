import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './App'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { rootReducer } from './reducers/combineReducer';
import { composeWithDevTools } from 'redux-devtools-extension';


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))


ReactDOM.render(
	<Provider store={store}>
		<App  />
	</Provider>,
	document.getElementById('root')
);


