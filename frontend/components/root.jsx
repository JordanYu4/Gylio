import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import SessionForm  from './session_form/session_form';
import App from './App';

const Root = ({ store }) => (
  <Provider store={ store }>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);

export default Root;
