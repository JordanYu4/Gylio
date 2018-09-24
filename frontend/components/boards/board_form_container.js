import { connect } from 'react-redux';
import { createBoard } from '../../actions/board_actions';

import BoardForm from './board_form';

const mapStateToProps = ({ errors }) => ({
  // Shouldn't be necessary w/ conditional submit disabling 
  errors: errors.boards
});

const mapDispatchToProps = dispatch => ({
  createBoard: board => dispatch(createBoard(board))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardForm);