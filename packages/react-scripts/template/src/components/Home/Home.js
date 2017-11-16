// @flow
import React from 'react';

import logo from './logo.svg';
import './Home.css';

interface Props {
  data: Object
}

const Home = (props: Props) => (
  <div className="Home">
    <header className="Home-header">
      <img src={logo} className="Home-logo" alt="logo" />
      <h1 className="Home-title">Welcome to Radon</h1>
    </header>
    <p className="Home-intro">
          To get started, edit <code>src/Home.js</code> and save to reload.
          {props.data}
    </p>
  </div>
);

export default Home;
