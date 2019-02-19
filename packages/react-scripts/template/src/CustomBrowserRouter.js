import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

interface Props {
  children: Array<Object>,
}

export const RouterContext = React.createContext({});

const CustomBrowserRouter = ({ children }: Props) => (
  <BrowserRouter>
    <Route>
      {routeProps => (
        <RouterContext.Provider value={routeProps}>
          {children}
        </RouterContext.Provider>
      )}
    </Route>
  </BrowserRouter>
);

export default CustomBrowserRouter;
