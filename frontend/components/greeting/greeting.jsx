import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <Link to="/login">Log In</Link>
      &nbsp;
      <Link to="/signup">Sign Up</Link>
    </nav>
  );

  const headerUser = () => (
    <hgroup className="hgroup">
      <h2 className="header-name">{ currentUser.username }</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? headerUser() : sessionLinks()
};

export default Greeting;
