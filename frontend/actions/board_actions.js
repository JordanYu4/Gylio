import * as APIUtil from '../util/board_api_util';

export const RECEIVE_BOARDS = 'RECEIVE_BOARDS';
export const RECEIVE_BOARD = 'RECEIVE_BOARD';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveBoards = boards => ({
  type: RECEIVE_BOARDS,
  boards
});

export const receiveBoard = board => ({
  type: RECEIVE_BOARD,
  board
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const fetchBoards = () => dispatch => (
  APIUtil.fetchBoards().then(boards => (
    dispatch(receiveBoards(boards))
  ), error => (
    dispatch(receiveErrors(error.responseJSON))
  ))
);

export const fetchBoard = boardId => dispatch => (
  APIUtil.fetchBoard(boardId).then(board => (
    dispatch(receiveBoard(board))
  ), error => (
    dispatch(receiveErrors(error.responseJSON))
  ))
);
