import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers';

import App from './components/App';
import Portfolio from './components/Portfolio';

//const store = createStore(reducer);

// const routes = <Route component={App}>
//     <Route path="/" component={Portfolio} />
// </Route>;

// ReactDOM.render(
//     <Provider store={store}>
//         <Router history={hashHistory}>{routes}</Router>
//     </Provider>,
//     document.getElementById('app')
// );

const data = [
    {
        "id":"K10_01",
        "active" : "1",
        "title":"MyLNI",
        "context" : "Orca Software",
        "category" : "JS Application",
        "timeline" : "January,2015 - May, 2015",
        "description" :  "MyLNI represents the first major expansion of the Washington State Labor &amp; Industries eGovernment initiative."
    },{
        "id":"K10_02",
        "active" : "1",
        "title":"Secure Message Center",
        "context" : "Orca Software",
        "category" : "JS Application",
        "timeline" : "May, 2015 - Feb, 2016",
        "description" :  "SMC is a secure messaging client, connecting LNI staff to a substantial user base."
    },{
        "id":"K10_03",
        "active" : "1",
        "title":"Electronic Plan Submittal ",
        "context" : "Orca Software",
        "category" : "UX Prototype",
        "timeline" : "May, 2015",
        "description" :  "Prototype and mockup design."
    }
];

ReactDOM.render(
    <Portfolio portfolio={data} />,
    document.getElementById('app')
);
