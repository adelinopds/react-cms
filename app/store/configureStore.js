import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import promise from 'redux-promise-middleware';
import reducer from '../reducers/rootReducer';
import config from '../config';

const middleware = [
  promise(),
  config.DEBUG && createLogger(),
].filter(Boolean);
const createStoreWithMiddleware = applyMiddleware(...middleware);

export default () => {
  const store = createStore(reducer, createStoreWithMiddleware);

  if (module.hot) {
    module.hot.accept(reducer, () => {
      const nextRootReducer = require('../reducers/rootReducer').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};
