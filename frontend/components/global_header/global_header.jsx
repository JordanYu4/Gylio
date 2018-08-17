import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class GlobalHeader extends React.Component { // ({ currentUser, logout, login }) => {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  demoLogin() {
    const demoUser = {
      username: 'Gandalf',
      password: 'shadowfax'
    };
    this.props.login(demoUser);
  };

  handleLogout() {
    this.props.history.push("/"); // not working 
    this.props.logout();
  };

  render() {
    const sessionLinks = () => (
      <nav className="header-login-signup">
        <button className="session-button" onClick={this.demoLogin}>Demo</button>
        &nbsp;
        <Link to="/login" className="session-button">Log In</Link>
        &nbsp;
        <Link to="/signup" className="session-button">Sign Up</Link>
      </nav>
    );

    const userNav = () => (
      <nav className="user-nav">
        <h2 className="header-name">{ this.props.currentUser.username }</h2>
        &nbsp;&nbsp;
        <button className="session-button" onClick={this.handleLogout}>Log Out</button>
      </nav>
    );

    return (
      <div className="global-header-container">
        <header className="global-header">
          <a href="/" className="home-link">
            <i className="icon-home"></i>
            Gylio
          </a>
          {this.props.currentUser ? userNav() : sessionLinks()}
        </header>
        <section className="global-header-spacer" />
      </div>
    );
  }
};

export default withRouter(GlobalHeader);
