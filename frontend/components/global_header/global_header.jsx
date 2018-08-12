import React from 'react';
import { Link } from 'react-router-dom';

const GlobalHeader = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="header-login-signup">
      <Link to="">Demo</Link>
      &nbsp;
      <Link to="/login">Log In</Link>
      &nbsp;
      <Link to="/signup">Sign Up</Link>
    </nav>
  );

  const userNav = () => (
    <hgroup className="hgroup">
      <h2 className="header-name">{ currentUser.username }</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? userNav() : sessionLinks()
};

export default GlobalHeader;
