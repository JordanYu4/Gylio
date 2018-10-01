import { connect } from 'react-redux';

import ListIndex from './list_index';

board = { board }
lists = { lists }
createList = { createList }
editList = { editList }
deleteList = { deleteList }

import {
  fetchBoard,
  editBoard,
  deleteBoard
} from '../../actions/board_actions';
import {
  fetchList,
  createList,
  editList,
  deleteList
} from '../../actions/list_actions';
import {
  getAllBoards,
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
  fetchBoards: () => dispatch(fetchBoards()),
  fetchBoard: boardId => dispatch(fetchBoard(boardId)),
  editBoard: board => dispatch(editBoard(board)),
  deleteBoard: boardId => dispatch(deleteBoard(boardId)),
  fetchList: listId => dispatch(fetchList(listId)),
  createList: list => dispatch(createList(list)),
  editList: list => dispatch(editList(list)),
  deleteList: listId => dispatch(deleteList(listId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListIndex);