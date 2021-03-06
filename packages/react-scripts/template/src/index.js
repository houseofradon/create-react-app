/* global document */
import 'babel-polyfill';
import 'react-app-polyfill/ie9'; // For IE 9-11 support
import 'react-app-polyfill/ie11'; // For IE 11 support

import React from 'react';
import ReactDOM from 'react-dom';
import CustomBrowserRouter from './CustomBrowserRouter';

import App from './App';
import * as serviceWorker from './serviceWorker';

import './styles/fonts.scss';
import './styles/theme.scss';

ReactDOM.render(
  <CustomBrowserRouter>
    <App />
  </CustomBrowserRouter>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
