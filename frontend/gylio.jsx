import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

// TESTING START
import { signup, login, logout } from './actions/session_actions';
import { fetchBoards, fetchBoard } from './actions/board_actions';

window.signup = signup;
window.login = login;
window.logout = logout;
window.user = { username: "Frank", password: "sinatra" };

window.fetchBoards = fetchBoards;
window.fetchBoard = fetchBoard;
// TESTING END

document.addEventListener('DOMContentLoaded', () => {
  let store = {};
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // TESTING START
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // TESTING END

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
