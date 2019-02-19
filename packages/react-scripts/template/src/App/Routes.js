// @flow
import React from 'react';
import {
  Switch, Route,
} from 'react-router-dom';

import Main from './main';
import PrivacyPolicy from './privacy-policy';

const Routes = () => (
  <Switch>
    <Route exact path="/privacy-policy" component={PrivacyPolicy} />
    <Route path="/" component={Main} />
  </Switch>
);

export default Routes;
