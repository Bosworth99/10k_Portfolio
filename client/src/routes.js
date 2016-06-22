import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'App.jsx';
import HeaderLayout from 'header/Layout.jsx';
import HomeLayout from 'home/Layout.jsx';
import WorkLayout from 'work/Layout.jsx';

//import PortfolioContainer from 'containers/Portfolio/Portfolio.jsx';
//import Single from 'components/Single/Single.jsx';

export default (
  <Route path="/" component={App} >
    <IndexRoute name="index" components={{ main: HomeLayout, header: HeaderLayout }} />
    <Route name="work" path="work" components={{ main: WorkLayout, header: HeaderLayout }} />
  </Route>
);

// <Route path="/portfolio" component={PortfolioContainer} />
// <Route path="/single/:id" component={Single} />
