import { connect } from 'react-redux';
import { withRouter } from "react-router";
import ListIndex from './list_index';

import {
  editBoard,
  fetchBoard
} from '../../actions/board_actions';
import {
  fetchList,
  createList,
  editList,
  deleteList
} from '../../actions/list_actions';
import {
  selectBoard,
  selectListsForBoard
} from '../../reducers/selectors';

const mapStateToProps = (state, { match }) => {
  const boardId = parseInt(match.params.id);
  const board = selectBoard(state.entities, boardId);
  const lists = board.listIds ? selectListsForBoard(state.entities, board) : {};
  return { boardId, board, lists };
};

const mapDispatchToProps = dispatch => ({
  fetchBoard: boardId => dispatch(fetchBoard(boardId)),
  editBoard: board => dispatch(editBoard(board)),
  fetchList: (boardId, listId) => dispatch(fetchList(boardId, listId)),
  createList: list => dispatch(createList(list)),
  editList: list => dispatch(editList(list)),
  deleteList: listId => dispatch(deleteList(listId))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ListIndex));