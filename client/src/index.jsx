// TODO this is a dependency for the fetch api, but its not resolving.
//import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, hashHistory } from 'react-router';
import { Provider } from 'react-redux';

import routes from 'routes.js';
import configureStore from 'store.js';

// not sure what initialState should be here
// - passing an empty object instead
const store = configureStore({});

// using hashHistory here, instead of browserHistory
// - was getting unfound routes from the hapi dev server
ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);
