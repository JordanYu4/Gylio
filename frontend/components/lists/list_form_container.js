import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ListForm from './list_form';

import { createList } from '../../actions/list_actions';
import { fetchBoard, editBoard } from '../../actions/board_actions';
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
  editBoard: board => dispatch(editBoard(board)), 
  fetchBoard: boardId => dispatch(fetchBoard(boardId))
});

export default withRouter(connect(
  mapStateToProps, 
  mapDispatchToProps
)(ListForm));