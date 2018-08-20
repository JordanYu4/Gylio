import * as BoardAPIUtil from '../util/board_api_util';

export const RECEIVE_BOARDS = 'RECEIVE_BOARDS';
export const RECEIVE_BOARD = 'RECEIVE_BOARD';
export const RECEIVE_BOARD_ERRORS = 'RECEIVE_BOARD_ERRORS';

export const fetchBoards = () => dispatch => (
  BoardAPIUtil.fetchBoards().then(boards => (
    dispatch(receiveBoards(boards))
  ), error => (
    dispatch(receiveErrors(error.responseJSON))
  ))
);

export const fetchBoard = boardId => dispatch => (
  BoardAPIUtil.fetchBoard(boardId).then(board => (
    dispatch(receiveBoard(board))
  ), error => (
    dispatch(receiveErrors(error.responseJSON))
  ))
);

export const createBoard = board => dispatch => (
  BoardAPIUtil.createBoard(board).then(board => (
    dispatch(receiveBoard(board))
  ), error => (
    dispatch(receiveErrors(error.responseJSON))
  )) 
);

export const editBoard = board => dispatch => (
  BoardAPIUtil.updateBoard(board).then(board => (
    dispatch(receiveBoard(board))
  )) // add error handling here
);

export const deleteBoard = boardId => dispatch => (
  BoardAPIUtil.deleteBoard(boardId).then(boardId => (
    dispatch(removeBoard(boardId))
  )) // add error handling here
);

export const receiveBoards = boards => ({
  type: RECEIVE_BOARDS,
  boards
});

export const receiveBoard = board => ({
  type: RECEIVE_BOARD,
  board
});

export const removeBoard = boardId => ({
  type: REMOVE_BOARD,
  boardId
});

export const receiveErrors = errors => ({
  type: RECEIVE_BOARD_ERRORS,
  errors
});
