import { connect } from 'react-redux'
import { withRouter } from 'react-router';
import BoardHeader from './board_header';

import {
  fetchBoard,
  editBoard,
  deleteBoard
} from '../../actions/board_actions';

import {
  selectBoard,
  selectListsForBoard
} from '../../reducers/selectors';

const mapStateToProps = (state, { match }) => {
  const boardId = parseInt(match.params.id);
  const board = selectBoard(state.entities, boardId);
  return { boardId, board };
};

const mapDispatchToProps = dispatch => ({
  fetchBoard: boardId => dispatch(fetchBoard(boardId)),
  editBoard: board => dispatch(editBoard(board)),
  deleteBoard: boardId => dispatch(deleteBoard(boardId)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardHeader));

