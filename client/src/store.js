import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'common/reducers/reducers.js';

export default function configureStore() {

  // middleware on the store
  const finalCreateStore = compose(
    applyMiddleware(thunk)
  )(createStore);

  // export target
  const store = finalCreateStore(rootReducer);

  // Enable Webpack hot module replacement for reducers
  if (module.hot) {
    module.hot.accept('common/reducers/reducers.js', () => {
      const nextReducer = require('common/reducers/reducers.js');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
