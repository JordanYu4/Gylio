import React from 'react';
import { Link } from 'react-router-dom';

const GlobalHeader = ({ currentUser, logout, login }) => {

  const demoUser = {
    username: 'Gandalf',
    password: 'shadowfax'
  };

  const demoLogin = () => {
    login(demoUser);
  };

  const sessionLinks = () => (
    <nav className="header-login-signup">
      <button className="session-button" onClick={demoLogin}>Demo</button>
      &nbsp;
      <Link to="/login" className="session-button">Log In</Link>
      &nbsp;
      <Link to="/signup" className="session-button">Sign Up</Link>
    </nav>
  );

  const userNav = () => (
    <nav className="user-nav">
      <h2 className="header-name">{ currentUser.username }</h2>
      &nbsp;&nbsp;
      <button className="session-button" onClick={logout}>Log Out</button>
    </nav>
  );

  return (
    <header>
      <a href="/">Gylio</a>
      {currentUser ? userNav() : sessionLinks()}
    </header>
  );
};

export default GlobalHeader;
