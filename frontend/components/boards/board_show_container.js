import { connect } from 'react-redux';

import { fetchBoard } from '../../actions/board_actions';
import {  } from '../../actions/list_actions';
import { selectBoard } from '../../reducers/selectors';
import BoardShow from './board_show';

const mapStateToProps = (state, { match }) => {
  const boardId = parseInt(match.params.boardId);
  const board = selectBoard(state.entities, boardId);
  return { board };
};

const mapDispatchToProps = dispatch => ({
  fetchBoard: boardId => dispatch(fetchBoard(boardId)),
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(BoardShow);
