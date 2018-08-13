import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Switch,
  HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import GlobalHeader from './global_header/global_header_container';
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import BoardIndexContainer from './boards/board_index_container';
import BoardShowContainer from './boards/board_show_container';

const App = () => (
  <div>
    <header>
      <a href="/">Gylio</a>
      <GlobalHeader />
    </header>
    <Switch>
      <AuthRoute path="/login" component={LogInFormContainer} />
      <AuthRoute path="/signup" component={SignUpFormContainer} />
      <ProtectedRoute exact path="/" component={ BoardIndexContainer } />
      <ProtectedRoute path="/boards/:boardId" component={ BoardIndexContainer } />
    </Switch>
  </div>
);

export default App;
