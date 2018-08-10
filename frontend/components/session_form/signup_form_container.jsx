import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';

import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Create New Account',
    navLink: <Link to="/login">sign in to your account</Link>,
    sessionFormHeader: "Create a Mise Account"
  };
};

const mapDispatchToProps = dispatch => ({
  process_form: user => dispatch(signup(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
