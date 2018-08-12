import React from 'react';
import { Link } from 'react-router-dom';

const GlobalHeader = ({ currentUser, logout, login }) => {

  const demoUser = {
    username: 'Gandalf',
    password: 'shadowfax'
  };

  const demoLogin = (user = demoUser) => {
    login(user);
  };

  const sessionLinks = () => (
    <nav className="header-login-signup">
      <button className="demo-login" onClick={demoLogin}>Demo</button>
      &nbsp;
      <Link to="/login">Log In</Link>
      &nbsp;
      <Link to="/signup">Sign Up</Link>
    </nav>
  );

  const userNav = () => (
    <nav className="user-nav">
      <h2 className="header-name">{ currentUser.username }</h2>
      &nbsp;&nbsp;
      <button className="header-button" onClick={logout}>Log Out</button>
    </nav>
  );

  return currentUser ? userNav() : sessionLinks()
};

export default GlobalHeader;
