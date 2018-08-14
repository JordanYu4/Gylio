import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login, clearFormErrors } from '../../actions/session_actions';

import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Log In',
    navLink: <Link to="/signup">create an account</Link>,
    sessionFormHeader: "Log in to Gylio"
  };
};

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(login(user)),
  clearFormErrors: () => dispatch(clearFormErrors()) 
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
