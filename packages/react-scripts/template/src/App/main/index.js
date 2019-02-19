// @flow
import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import useRouter from '../use-router';
import GlobalState from '../global-state';

import Home from '../home';

import styles from './index.module.scss';

const DOMAIN_NAME = process.env.REACT_APP_DOMAIN_NAME ? process.env.REACT_APP_DOMAIN_NAME : '';

/*
  Should be a react function when using hooks
  Don’t call Hooks from regular JavaScript functions
  https://reactjs.org/docs/hooks-rules.html
*/

export default function Main() {
  const { location } = useRouter();
  const transitions = useTransition(location, currentLocation => currentLocation.pathname, {
    from: { opacity: 0.8, transform: 'translate3d(0,100vh,0)' },
    enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
    leave: { opacity: 0.8, transform: 'translate3d(0,-100vh,0)' },
  });

  const helmetValues = (
    <Helmet>
      <title>
        Home
      </title>
      <meta name="description" content="Home" />
      <meta property="og:title" content="Home" />
      <meta property="og:description" content="Home" />
      <meta property="og:url" content={`${DOMAIN_NAME}`} />
      {/* TODO: add share image */}
    </Helmet>
  );

  const transitionsMap = transitions.map(({ item, props, key }) => (
    <animated.div key={key} style={props}>
      <Switch location={item}>
        <Route path="/" exact render={() => (<Home />)} />
      </Switch>
    </animated.div>
  ));

  return (
    <div className={styles.main}>
      {helmetValues}
      <div className={styles.mainContainer}>
        <GlobalState.GlobalStateProvider>
          {transitionsMap}
        </GlobalState.GlobalStateProvider>
      </div>
    </div>
  );
}
