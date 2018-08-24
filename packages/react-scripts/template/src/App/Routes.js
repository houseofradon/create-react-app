// @flow
import React from 'react';
import { 
  Switch, Route, Redirect, withRouter,
} from 'react-router-dom';
import withAnalytics, { initAnalytics } from 'react-with-analytics';
import ga from 'react-ga';

import Home from './home';
import PrivacyPolicy from './privacy-policy';

const ANALYTICS_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_ID
  ? process.env.REACT_APP_GOOGLE_ANALYTICS_ID : 'UA-XXXXXXXXX-X';

initAnalytics(ANALYTICS_ID);
ga.set({ displayFeaturesTask: null });
ga.set({ anonymizeIp: true });

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/privacy-policy" component={PrivacyPolicy} />
    <Redirect from="*" to="/" />
  </Switch>
);

export default withRouter(withAnalytics(Routes));
