// @flow
import React from 'react';

import Routes from './Routes';
import PrivacyBanner from '../components/privacy-banner';

import './index.css';

const App = () => (
  <div className="App">
    <div className="app-content">
      <Routes />
    </div>
    <PrivacyBanner />
  </div>
);

export default App;
