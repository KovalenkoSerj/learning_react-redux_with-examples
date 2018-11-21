import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import App from './components/App';
import rootReducer from './reducers/combine_reducers';

const logger = createLogger({ collapsed: true }),
      createStoreWithMiddleware = applyMiddleware(logger),
      store = createStore(rootReducer, compose(createStoreWithMiddleware));

render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
)

