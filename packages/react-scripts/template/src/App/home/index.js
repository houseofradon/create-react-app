// @flow
import React from 'react';
import { Helmet } from 'react-helmet';

import styles from './index.module.scss';

const DOMAIN_NAME = process.env.REACT_APP_DOMAIN_NAME ? process.env.REACT_APP_DOMAIN_NAME : '';

const Home = () => (
  <div className={styles.home}>
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
    Hello World
  </div>
);

export default Home;
