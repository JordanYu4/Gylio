import * as BoardAPIUtil from '../util/board_api_util';

export const RECEIVE_BOARDS = 'RECEIVE_BOARDS';
export const RECEIVE_BOARD = 'RECEIVE_BOARD';
export const RECEIVE_BOARD_ERRORS = 'RECEIVE_BOARD_ERRORS';
export const REMOVE_BOARD = 'REMOVE_BOARD';

export const fetchBoards = () => dispatch => (
  BoardAPIUtil.fetchBoards().then(boards => (
    dispatch(receiveBoards(boards))
  ), errors => (
    dispatch(receiveErrors(errors.responseJSON))
  ))
);

export const fetchBoard = boardId => dispatch => (
  BoardAPIUtil.fetchBoard(boardId).then(payload => (
    dispatch(receiveBoard(payload))
  ), errors => (
    dispatch(receiveErrors(errors.responseJSON))
  ))
);

export const createBoard = board => dispatch => (
  BoardAPIUtil.createBoard(board).then(payload => (
    dispatch(receiveBoard(payload))
  ), errors => (
    dispatch(receiveErrors(errors.responseJSON))
  )) 
);

export const editBoard = board => dispatch => (
  BoardAPIUtil.updateBoard(board).then(board => (
    dispatch(receiveBoard(board))
  ), errors => (
    dispatch(receiveErrors(errors.responseJSON))
  )) 
);

export const deleteBoard = boardId => dispatch => (
  BoardAPIUtil.deleteBoard(boardId).then(boardId => (
    dispatch(removeBoard(boardId))
  ), errors => (
    dispatch(receiveErrors(errors.responseJSON))
  ))
);

export const receiveBoards = boards => ({
  type: RECEIVE_BOARDS,
  boards
});

export const receiveBoard = payload => ({
  type: RECEIVE_BOARD,
  payload
});

export const removeBoard = boardId => ({
  type: REMOVE_BOARD,
  boardId
});

export const receiveErrors = errors => ({
  type: RECEIVE_BOARD_ERRORS,
  errors
});
