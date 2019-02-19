// @flow
import React, { useContext } from 'react';

import GlobalStateTypes from '../global-state-types';

import GlobalState from '../global-state';

import styles from './index.module.scss';

export default function Home() {
  // const { state, dispatch } = useContext(GlobalState.GlobalContext);

  // const addProjectDispatch = project => () => dispatch({ type: GlobalStateTypes.ADD_PROJECT, payload: project });

  return (
    <div className={styles.home}>
      Hello World
    </div>
  );
};
