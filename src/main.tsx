import React from 'react';
import ReactDOM from 'react-dom';

import { App } from 'app/app';
import 'app/index.css';

import 'app/config/css-variables.css';

import { BrowserRouter as Router } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import en from 'app/locales/en.json';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <IntlProvider locale={'en'} messages={en}>
        <App />
      </IntlProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
