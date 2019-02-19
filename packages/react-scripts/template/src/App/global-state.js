import React, { createContext, useReducer } from 'react';
import GlobalStateTypes from './global-state-types';

const GlobalContext = createContext();

const initialState = {
  projects: [],
};

function reducer(state, action) {
  switch (action.type) {
    case GlobalStateTypes.ADD_PROJECT:
      return Object.assign({}, state, action.payload);
    default:
      return { ...state };
  }
}

interface Props {
  children: Array<Object>,
}

function GlobalStateProvider(props: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  const { children } = props;

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
}

const GlobalState = {
  GlobalContext,
  GlobalStateProvider,
};

export default GlobalState;
