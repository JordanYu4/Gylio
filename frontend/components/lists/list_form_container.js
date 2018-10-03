import { connect } from 'react-redux';
import ListForm from './list_form';

import { createList } from '../../actions/list_actions';
import { editBoard } from '../../actions/board_actions';

const mapStateToProps = ({ errors }) => ({
  errors: errors.lists
});

const mapDispatchToProps = dispatch => ({
  createList: list => dispatch(createList(list)), 
  editBoard: board => dispatch(editBoard(board))
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(ListForm);