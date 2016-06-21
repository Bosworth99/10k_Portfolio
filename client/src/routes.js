import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'components/App';
import PortfolioContainer from 'components/portfolio';
// import Single from 'components/Single';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={PortfolioContainer} />
        <Route path="/portfolio" component={PortfolioContainer} />
    </Route>
)
