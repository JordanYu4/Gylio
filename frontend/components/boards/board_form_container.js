import { connect } from 'react-redux';
import BoardForm from './board_form';

import { createBoard } from '../../actions/board_actions';

const mapStateToProps = ({ errors }) => ({
  // Adds redundancy in conjunction w/ conditional submit disabling 
  errors: errors.boards
});

const mapDispatchToProps = dispatch => ({
  createBoard: board => dispatch(createBoard(board))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardForm);