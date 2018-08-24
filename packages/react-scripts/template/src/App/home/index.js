// @flow
import React from 'react';

import './index.css';

const DOMAIN_NAME = process.env.REACT_APP_DOMAIN_NAME ? process.env.REACT_APP_DOMAIN_NAME : '';

const Home = () => (
  <div className="Home">
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
