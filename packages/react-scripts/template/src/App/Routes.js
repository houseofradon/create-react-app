// @flow
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../components/Home/Home';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} title="Home" />
    <Redirect from="*" to="/" />
  </Switch>
);

export default Routes;
