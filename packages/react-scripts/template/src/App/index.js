// @flow
import React from 'react';

import Routes from './routes';
import PrivacyBanner from '../components/privacy-banner';

import styles from './index.module.scss';

const App = () => (
  <div className={styles.app}>
    <div className={styles.content}>
      <Routes />
    </div>
    <PrivacyBanner />
  </div>
);

export default App;
