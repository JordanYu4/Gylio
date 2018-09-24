import { connect } from 'react-redux';
import BoardShow from './board_show';

import { fetchBoard,
         editBoard,
         deleteBoard } from '../../actions/board_actions';
import { fetchList,
         createList,
         editList,
         deleteList } from '../../actions/list_actions';
import { getAllBoards, 
         selectBoard } from '../../reducers/selectors';

const mapStateToProps = (state, { match }) => {
  // const boards = getAllBoards(state.entities);
  const boardId = parseInt(match.params.id);
  const board = selectBoard(state.entities, boardId);
  return { board };
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
)(BoardShow);
