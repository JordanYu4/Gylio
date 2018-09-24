import merge from 'lodash/merge';

import {
  RECEIVE_BOARDS,
  RECEIVE_BOARD,
  REMOVE_BOARD
} from '../actions/board_actions';

const boardsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOARDS:
      return action.boards;
    case RECEIVE_BOARD:
      const newBoard = { [action.payload.board.id]: action.payload.board }
      return merge({}, state, newBoard);
    case REMOVE_BOARD:
      let newState = merge({}, state);
      delete newState[action.boardId];
      return newState;
    default:
      return state;
  }
};

export default boardsReducer;
