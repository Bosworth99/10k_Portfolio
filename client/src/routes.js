import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'components/App';
import PortfolioContainer from 'containers/Portfolio/Portfolio.jsx';
import Single from 'components/Single/Single.jsx';

export default (
    <Route path="/" component={App} >
        <IndexRoute component={PortfolioContainer} />
        <Route path="/portfolio" component={PortfolioContainer} />
        <Route path="/single/:id" component={Single} />
    </Route>
);
