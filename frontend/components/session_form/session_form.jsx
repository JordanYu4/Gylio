import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.clearFormErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    const errors = this.props.errors;
    const fullErrors = () => (
      <ul>
        {errors.map((error, idx) => (
          <li key={`error-${idx}`}>
            { error }
          </li>
        ))}
      </ul>
    );

    return (
      <span>{ errors[0] }</span>
    );
  }

  render () {
    const emailInput = () => (
      <div>
        <label>Email
          <br />
          <input type="text"
            value={this.state.email}
            onChange={this.update('email')}
            className="login-input"
            placeholder="e.g., gandalf@istar.edu"
          />
        </label>
        <br />
      </div>
    );

    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <section className="session-form-error">
            {this.renderErrors()}
          </section>
          <h1>{ this.props.sessionFormHeader }</h1>
          <h3>or {this.props.navLink}</h3>
          <div className="login-form">
            <label>Username
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
                placeholder="e.g., Gandalf the Grey"
              />
            </label>
            <br />
            { this.props.formType === "Log In" ? '' : emailInput() }
            <label>Password
              <br />
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                placeholder="e.g., ••••••••"
              />
            </label>
            <br />
            <input className="session-button" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    );
  }

}

export default withRouter(SessionForm);
