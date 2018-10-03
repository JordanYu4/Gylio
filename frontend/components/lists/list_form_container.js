import { connect } from 'react-redux';
import ListForm from './list_form';
import { withRouter } from 'react-router';

import { createList } from '../../actions/list_actions';
import { editBoard } from '../../actions/board_actions';
import { selectBoard } from "../../reducers/selectors";

const mapStateToProps = (state, ownProps) => {
  let boardId = ownProps.match.params.id;
  return {
    errors: state.errors.lists,
    boardId: boardId,
    board: selectBoard(state.entities, boardId)
  };
};

const mapDispatchToProps = dispatch => ({
  createList: list => dispatch(createList(list)), 
  editBoard: board => dispatch(editBoard(board))
});

export default withRouter(connect(
  mapStateToProps, 
  mapDispatchToProps
)(ListForm));