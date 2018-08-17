import { connect } from 'react-redux';

import { fetchBoard } from '../../actions/board_actions';
import { editBoard, editList } from '../../actions/list_actions';
import { selectBoard } from '../../reducers/selectors';
import BoardShow from './board_show';

const mapStateToProps = (state, { match }) => {
  const boardId = parseInt(match.params.boardId);
  const board = selectBoard(state.entities, boardId);
  return { board };
};

const mapDispatchToProps = dispatch => ({
  fetchBoard: boardId => dispatch(fetchBoard(boardId)),
  editBoard: board => dispatch(editBoard(board)),
  editList: list => dispatch(editList(list))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(BoardShow);
