import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Switch,
  HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import GlobalHeaderContainer from './global_header/global_header_container';
import SplashBody from './splash/splash_body';
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import BoardIndexContainer from './boards/board_index_container';
import BoardShow from './boards/board_show';

const App = () => (
  <div className="app-container">
    <Route path="/" component={ GlobalHeaderContainer } />
    <AuthRoute path="/login" component={ LogInFormContainer } />
    <AuthRoute path="/signup" component={ SignUpFormContainer } />
    <div className="main">
      <Switch>
        <AuthRoute exact path="/" component={ SplashBody } />
        <ProtectedRoute exact path="/boards" component={ BoardIndexContainer } />
        <ProtectedRoute path="/boards/:id" component={ BoardShow } />
      </Switch>
    </div>
  </div>
);

export default App;
