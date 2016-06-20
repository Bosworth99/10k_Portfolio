import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'components/App';
import Portfolio from 'components/portfolio';
// import Single from 'components/Single';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Portfolio} />
        <Route path="portfolio" component={Portfolio} />
    </Route>
)
