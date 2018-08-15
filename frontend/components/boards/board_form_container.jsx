import React from 'react';
import { connect } from 'react-redux';
import { createBoard } from '../../actions/board_actions';

import BoardForm from './board_form';

const mapStateToProps = ({ errors }) => ({
  errors: errors.boards // Shouldn't be necessary w/ conditional disabling of submit button
});

const mapDispatchToProps = dispatch => ({
  createBoard: board => {
    return dispatch(createBoard(board));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardForm);
