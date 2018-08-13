import merge from 'lodash/merge';

import {
  RECEIVE_BOARDS,
} from '../actions/board_actions';

const boardsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOARDS:
      return action.boards;
    default:
      return state;
  }
};

export default boardsReducer;
