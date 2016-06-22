import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'components/App.jsx';
import HomeLayout from 'home/Layout.jsx';

//import PortfolioContainer from 'containers/Portfolio/Portfolio.jsx';
//import Single from 'components/Single/Single.jsx';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={HomeLayout} />
    <Route name="home" path="home" component={HomeLayout} />
  </Route>
);

// <Route path="/portfolio" component={PortfolioContainer} />
// <Route path="/single/:id" component={Single} />
