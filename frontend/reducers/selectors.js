export const selectBoard = ({ boards }, boardId) => {
  return boards[boardId]; // need an alternative in case board not found?
};

window.selectBoard = selectBoard;

export const getAllBoards = ({ boards }) => (
  Object.keys(boards).map(key => boards[key])
);
