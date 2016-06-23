import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'App.jsx';
import Header from 'header/HeaderContainer.jsx';
import Home from 'home/HomeContainer.jsx';
import Work from 'work/WorkContainer.jsx';
import WorkItem from 'workItem/WorkItemContainer.jsx'

// TODO - there appear to be numerous ways of setting this up.
// - this works but nut sure if best practice
export default (
  <Route path="/" component={App} >
    <IndexRoute components={{ main: Home, header: Header }} />
    <Route path="work" components={{ main: Work, header: Header }} />
    <Route path="work/:itemId" components={{ main: WorkItem, header: Header }} />
  </Route>
);
