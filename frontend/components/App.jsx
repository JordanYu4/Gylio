import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  Route,
  Switch
} from 'react-router-dom';
import { 
  AuthRoute, 
  ProtectedRoute 
} from '../util/route_util';

import GlobalHeaderContainer from './global_header/global_header_container';
import SplashBody from './splash/splash_body';
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import BoardIndexContainer from './boards/board_index_container';
import BoardShow from './boards/board_show';

const App = () => (
  <div className="app-container">
    <Route path="/" component={ GlobalHeaderContainer } />
    <Switch>
      <AuthRoute exact path="/" component={ SplashBody } />
      <AuthRoute path="/login" component={ LogInFormContainer } />
      <AuthRoute path="/signup" component={ SignUpFormContainer } />
      <ProtectedRoute exact path="/boards" component={ BoardIndexContainer } />
      <ProtectedRoute path="/boards/:id" component={ BoardShow } />
    </Switch>
  </div>
);

import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faCheckSquare, 
  faNewspaper, 
  faLock,
  faCoffee
} from '@fortawesome/free-solid-svg-icons';

library.add(
  fab, 
  faCheckSquare, 
  faCoffee, 
  faNewspaper,
  faLock
);

// export default DragDropContext(App);
export default App;
