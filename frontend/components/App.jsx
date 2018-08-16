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
import BoardShowContainer from './boards/board_show_container';

const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/" component={ GlobalHeaderContainer } />
      <ProtectedRoute path="/" component={ GlobalHeaderContainer } />
    </Switch>
    <Switch>
      <Route exact path="/" component={ SplashBody } />
      <AuthRoute path="/login" component={ LogInFormContainer } />
      <AuthRoute path="/signup" component={ SignUpFormContainer } />
      <ProtectedRoute exact path="/boards" component={ BoardIndexContainer } />
      <ProtectedRoute path="/boards/:boardId" component={ BoardShowContainer } />
    </Switch>
  </div>
);

export default App;
