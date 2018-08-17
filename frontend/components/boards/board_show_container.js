import { connect } from 'react-redux';

import { fetchBoard, editBoard, deleteBoard } from '../../actions/board_actions';
import { fetchList, editList, deleteList } from '../../actions/list_actions';
import { selectBoard } from '../../reducers/selectors';
import BoardShow from './board_show';

const mapStateToProps = (state, { match }) => {
  const boardId = parseInt(match.params.boardId);
  const board = selectBoard(state.entities, boardId);
  return { board, boardId };
};

const mapDispatchToProps = dispatch => ({
  fetchBoard: boardId => dispatch(fetchBoard(boardId)),
  editBoard: board => dispatch(editBoard(board)),
  editList: list => dispatch(editList(list)),
  deleteList: listId => dispatch(deleteList(listId))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(BoardShow);
