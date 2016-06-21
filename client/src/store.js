import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducers';

export default function configureStore(initialState) {
    const finalCreateStore = compose(
        applyMiddleware(
            thunkMiddleware,
            createLogger
        )
    )(createStore);
    const store = finalCreateStore(rootReducer);
    // Enable Webpack hot module replacement for reducers
    if (module.hot) {
        module.hot.accept('./reducers', () => {
            const nextReducer = require('./reducers');
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}
